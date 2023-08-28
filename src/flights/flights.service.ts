import { Injectable } from '@nestjs/common';
import { CreateFlightDto } from '../dtos/create-flight.dto';
import { UpdateFlightDto } from '../dtos/update-flight.dto';
import { SearchFlight } from '../dtos/search-flight.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Airports } from 'src/entities/airports.entity';
import { Repository } from 'typeorm';
import { Airlines } from 'src/entities/airlines.entity';
import { Cities } from 'src/entities/cities.entity';
import { getDistanceBetweenTwoCoordinates, getRandomDateAfter } from 'src/common/utils.';
import { Currency } from 'src/common/enums/currency.enum';

@Injectable()
export class FlightsService {
  private IVA: number = 1.15;
  private TUA: number = 1.35;

  constructor(
    @InjectRepository(Airports)
    private airportsRepository: Repository<Airports>,
    @InjectRepository(Airlines)
    private airlinesRepository: Repository<Airlines>,
    @InjectRepository(Cities)
    private citiesRepository: Repository<Cities>
  ){}


  create(createFlightDto: CreateFlightDto) {
    return 'This action adds a new flight';
  }

  async findAll(searchFlight: SearchFlight) {
    const originAirports = await this.airportsRepository.find(
      {
        where: {
          iata: searchFlight.departureAirport.country.code,
          location: searchFlight.departureAirport.city
        }
      }
    );

    const destinationAirports = await this.airportsRepository.find(
      {
        where: {
          iata: searchFlight.arrivalAirport.country.code,
          location: searchFlight.arrivalAirport.city
        }
      }
    );

    const destinationCity = await this.citiesRepository.findOneBy({
      ascii_name: searchFlight.arrivalAirport.city
    });

    const originCity = await this.citiesRepository.findOneBy({
      ascii_name: searchFlight.departureAirport.city
    });

    const airlines = await this.airlinesRepository.find({
      where: [ 
        {country: searchFlight.departureAirport.country.label},
        {country: searchFlight.arrivalAirport.country.label},
        {country: 'USA'}
      ]
    });

    const distance = getDistanceBetweenTwoCoordinates({
      latitude: destinationCity.lat.toString(),
      longitude: destinationCity.lng.toString()
    },{
      latitude: originCity.lat.toString(),
      longitude: originCity.lng.toString()
    })

    //console.log("🚀 ~ file: flights.service.ts:58 ~ FlightsService ~ findAll ~ distance:", distance)
    //console.log("🚀 ~ file: flights.service.ts:33 ~ FlightsService ~ findAll ~ airports:", airports)
    //console.log("🚀 ~ file: flights.service.ts:37 ~ FlightsService ~ findAll ~ airlines:", airlines)
  
    const flightNumber = Math.floor(Math.random() * 6) + 2;
    const flights = this.buildFlights(
      2,
      this.getRandomAirlines(flightNumber, airlines), 
      searchFlight.departureAirport, 
      searchFlight.arrivalAirport, 
      searchFlight.currency,
      +distance  
    );
    
    return {
      flights: flights,
      origin: originAirports,
      destination: destinationAirports
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} flight`;
  }

  update(id: number, updateFlightDto: UpdateFlightDto) {
    return `This action updates a #${id} flight`;
  }

  remove(id: number) {
    return `This action removes a #${id} flight`;
  }


  getRandomAirlines(num: number, airlines: Airlines[]){
    const shuffledAirlines = [...airlines];
    const randomAirlines = [];

    while(randomAirlines.length < num && shuffledAirlines.length > 0){
      const randomIndex = Math.floor(Math.random() * shuffledAirlines.length);
      const randomAirline = shuffledAirlines.splice(randomIndex, 1)[0];
      randomAirlines.push(randomAirline);
    }

    return randomAirlines;
  }

  buildFlights(
    num: number, 
    airlines: Airlines[], 
    originAirport, 
    destinationAirport, 
    currency: Currency,
    distance: number,
  ){
    const randomFlights = [];

    for (const airline of airlines) {
      for (let count = 0; count < num; count++) {
        const date = getRandomDateAfter(new Date());
        const priceWhitTaxes = this.getFlightPrice(currency, distance);

        const flight = {
          orig_airport: originAirport.airport,
          dest_airport: destinationAirport.airport,
          airline: airline.airline,
          date: date.date,
          time: date.time,
          price: priceWhitTaxes.price.toFixed(2),
          taxes: priceWhitTaxes.taxes,
          IVA: priceWhitTaxes.IVA,
          TUA: priceWhitTaxes.TUA,
          currency: 'DLLS',
          distance: distance
        };
  
        randomFlights.push(flight);
      }
    }
  
    return randomFlights;
  }

  getFlightPrice(currency: Currency, distance: number) {
    const pricePerKm = Math.floor(Math.random() * 5) + 1.75;
    const priceBefore = distance * pricePerKm;

    const IVA = priceBefore * this.IVA;
    const TUA = priceBefore * this.TUA;

    return {
      price: currency == Currency.MXN ?  (priceBefore / 16.80) : priceBefore,
      taxes: IVA + TUA,
      IVA: IVA,
      TUA: TUA 
    }
  }
}