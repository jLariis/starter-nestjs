import { Currency } from "src/common/enums/currency.enum";

export class SearchFlight {
    currency: Currency;
    departureAirport: {
        time: string;
        code: string;
        tz: string;
        timeZone: string;
        type: number;
        label: string;
        country: {
            label: string;
            code: string;
        }
        city: string;
    }
    arrivalAirport: {
        time: string;
        code: string;
        tz: string;
        timeZone: string;
        type: number;
        label: string;
        country: {
            label: string;
            code: string;
        }
        city: string;
    }
}