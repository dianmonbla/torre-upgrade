import { ModelAbstract } from './model-abstract';

export class LocationModel extends ModelAbstract<LocationModel>{
    name: string;
    country: string;
    latitude: number;
    longitude: number;
    timezone: string;
    timezoneOffSet: number;
}