import {
  DateOptions,
  DistanceMatrixParam,
  EarthRadius,
} from './typings/Typings';

export class Services {
  private dateOptions: DateOptions;

  constructor() {
    this.dateOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
  }

  private convertToRad(degree: number) {
    return (degree * Math.PI) / 180;
  }

  getDatetime(timestamp: number): string[] {
    return [
      new Date(timestamp).toLocaleTimeString('en-BD'),
      new Date(timestamp).toLocaleDateString('en-BD', this.dateOptions),
    ];
  }

  getDistance(distanceMatrixParam: DistanceMatrixParam) {
    /**
     * @φ is latitude
     * @λ is longitude
     *
     * @Haversine_formula
     * a = sin²(Δφ/2) + cos φ1 ⋅ cos φ2 ⋅ sin²(Δλ/2)
     * c = 2 ⋅ atan2( √a, √(1−a) )
     * d = R ⋅ c
     * where	φ is latitude, λ is longitude, R is earth’s radius (mean radius = 6,371km);
     * note that angles need to be in radians to pass to trig functions!
     *
     * @return distance in metres
     */

    const φ1 = this.convertToRad(distanceMatrixParam.origin.lat1);
    const φ2 = this.convertToRad(distanceMatrixParam.destination.lat2);
    const Δφ = this.convertToRad(
      distanceMatrixParam.destination.lat2 - distanceMatrixParam.origin.lat1
    );
    const Δλ = this.convertToRad(
      distanceMatrixParam.destination.lng2 - distanceMatrixParam.origin.lng1
    );
    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const d = EarthRadius * c;

    return Number(d.toFixed(2));
  }
}
