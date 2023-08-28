import { Coordinate } from "./interfaces/coordinate";

export const formatToYYYYMMDD = (date: Date): string => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

export const formatToHHMM = (date: Date): string => {
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = (hours % 12 || 12).toString().padStart(2, '0');
    return `${formattedHours}:${minutes} ${ampm}`;
}

export const gradesToRadiants = (grados) => {
return grados * Math.PI / 180;
}

export const getDistanceBetweenTwoCoordinates = (coordinateOne: Coordinate, coordinateTwo: Coordinate) => {
    const latitudeOne = gradesToRadiants(coordinateOne.latitude)
    const latitudeTwo = gradesToRadiants(coordinateTwo.latitude)
    const longitudeOne = gradesToRadiants(coordinateOne.longitude)
    const longitudeTwo = gradesToRadiants(coordinateTwo.longitude)

    const HEARTH_KM_RADIO = 6371;

    let differenceBetweenLatitudes = (latitudeOne - latitudeTwo);
    let differenceBetweenLongitudes = (longitudeOne - longitudeTwo);

    let a = Math.pow(Math.sin(differenceBetweenLatitudes / 2.0), 2) + Math.cos(latitudeOne) * Math.cos(latitudeTwo) * Math.pow(Math.sin(differenceBetweenLongitudes / 2.0), 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return (HEARTH_KM_RADIO * c).toFixed(2);
}

export const getRandomDateAfter = (date: Date) => {
    const currentDate = new Date();
    const offsetDays = Math.floor(Math.random() * 7); // Entre 0 y 3 días
    const offsetHours = Math.floor(Math.random() * 10); // Entre 0 y 3 horas
    
    const futureDate = new Date(currentDate);
    futureDate.setDate(currentDate.getDate() + offsetDays);
    futureDate.setHours(currentDate.getHours() + offsetHours);
    
    return {
      date: formatToYYYYMMDD(futureDate),
      time: formatToHHMM(futureDate)
    };
  }
