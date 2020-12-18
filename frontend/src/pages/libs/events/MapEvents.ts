import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import {
  GoogleMap,
  GoogleMapEvent,
  LatLng,
  MapAnimation,
  MapDirectionResult,
  MapDirectionsRenderer,
  MapDirectionsService,
  MapDirectionStatus,
  MapInfoWindow,
  MapMarker,
  MapOptions,
  MapTrafficModel,
  MapTravelMode,
  Service,
} from '../typings/Typings';
import { app } from '../Config';
import * as submarine from '../../../assets/img/submarine.svg';
import * as groundStation from '../../../assets/img/ground-station.svg';
import { InfoWindow } from '../../components/map/InfoWindow';

export class MapEvents {
  private googleMapContainer = document.getElementById(
    'googleMap'
  ) as HTMLElement;

  private mapLoading = document.getElementsByClassName('map-loading')[0];
  private isMapLoaded: boolean;
  private googleMap: GoogleMap;
  private mapOptions: MapOptions;

  private defaultLatitude: number;
  private defaultLongitude: number;
  private groundStationLatitude: number;
  private groundStationLongitude: number;
  private submarineLatitude: number;
  private submarineLongitude: number;
  private submarineAltitude: number;

  private groundStationMarker: MapMarker;
  private submarineMarker: MapMarker;

  private directionService: MapDirectionsService;
  private mapDirectionsRenderer: MapDirectionsRenderer;
  private mapInfoWindow: MapInfoWindow;

  constructor(private service: Service) {
    this.isMapLoaded = false;
    this.defaultLatitude = app.coordinate.latitude;
    this.defaultLongitude = app.coordinate.longitude;
    this.groundStationLatitude = this.defaultLatitude;
    this.groundStationLongitude = this.defaultLongitude;
    this.submarineLatitude = this.defaultLatitude;
    this.submarineLongitude = this.defaultLongitude;
    this.submarineAltitude = 1052;
    this.mapOptions = {
      center: new LatLng(this.defaultLatitude, this.defaultLongitude),
      zoom: 18,
      fullscreenControl: false,
      clickableIcons: true,
      disableDefaultUI: true,
    };
    this.googleMap = new GoogleMap(this.googleMapContainer, this.mapOptions);
    this.groundStationMarker = new MapMarker();
    this.submarineMarker = new MapMarker();
    this.directionService = new MapDirectionsService();
    this.mapDirectionsRenderer = new MapDirectionsRenderer();
    this.mapInfoWindow = new MapInfoWindow();
    this.initMap();
    this.infoWindowEvents();
    setInterval(() => {
      this.initMap();
    }, 30000);
  }

  private getGroundStationPosition(
    onSuccess: PositionCallback,
    onError: PositionErrorCallback = (error: GeolocationPositionError) => {
      alert(
        'Getting error while accessing phone location!\n\n' +
          'code: ' +
          error.code +
          '\n' +
          'message: ' +
          error.message +
          '\n'
      );
    }
  ) {
    navigator.geolocation.getCurrentPosition(onSuccess, onError, {
      maximumAge: 3000,
      timeout: 5000,
      enableHighAccuracy: true,
    });
  }

  private renderRoute() {
    /**
     * @GS_to_submarine
     */
    this.directionService.route(
      {
        destination: new LatLng(
          this.submarineLatitude,
          this.submarineLongitude
        ),
        origin: new LatLng(
          this.groundStationLatitude,
          this.groundStationLongitude
        ),
        travelMode: MapTravelMode.WALKING,
        drivingOptions: {
          departureTime: new Date(),
          trafficModel: MapTrafficModel.BEST_GUESS,
        },
        provideRouteAlternatives: true,
      },
      (result: MapDirectionResult, status: MapDirectionStatus) => {
        if (status === 'OK')
          this.mapDirectionsRenderer.setOptions({
            markerOptions: { visible: false },
            polylineOptions: { strokeWeight: 7, strokeColor: '#f28482' },
            preserveViewport: true,
            directions: result,
            map: this.googleMap,
          });
      }
    );
  }

  private generateInfoWindow(gpsTime: number) {
    /**
     * @GS_to_submarine
     */
    const distance = this.service.getDistance({
      origin: {
        lat1: this.groundStationLatitude,
        lng1: this.groundStationLongitude,
      },
      destination: {
        lat2: this.submarineLatitude,
        lng2: this.submarineLongitude,
      },
    });
    const datetime = this.service.getDatetime(gpsTime);
    const element = createElement(InfoWindow, {
      latitude: this.submarineLatitude,
      longitude: this.submarineLongitude,
      altitude: this.submarineAltitude,
      distance: distance,
      gpsTime: datetime[0],
      gpsDate: datetime[1],
    });

    this.mapInfoWindow.setOptions({
      content: renderToString(element),
      position: new LatLng(this.submarineLatitude, this.submarineLongitude),
      pixelOffset: new google.maps.Size(0, -50),
      maxWidth: 300,
    });
  }

  private initMap(coordinate?: LatLng) {
    if (coordinate) {
      this.mapOptions = {
        center: coordinate,
        zoom: 18,
        fullscreenControl: false,
        clickableIcons: true,
        disableDefaultUI: true,
      };
      this.googleMap.setOptions(this.mapOptions);
      this.submarineMarker.setOptions({
        position: coordinate,
        map: this.googleMap,
        icon: {
          url: submarine.default,
        },
        animation: MapAnimation.BOUNCE,
      });
    } else {
      this.submarineMarker.setOptions({
        position: new LatLng(this.submarineLatitude, this.submarineLongitude),
        map: this.googleMap,
        icon: {
          url: submarine.default,
        },
      });
    }
    this.getGroundStationPosition((position: GeolocationPosition) => {
      this.groundStationLatitude = position.coords.latitude;
      this.groundStationLongitude = position.coords.longitude;
      this.groundStationMarker.setOptions({
        position: new LatLng(
          this.groundStationLatitude,
          this.groundStationLongitude
        ),
        map: this.googleMap,
        icon: {
          url: groundStation.default,
        },
        animation: MapAnimation.BOUNCE,
      });
      this.isMapLoaded = true;
      if (this.isMapLoaded) {
        this.mapLoading.classList.add('map-loading--deactivate');
        this.googleMapContainer.classList.add('google-map--active');
      }
      this.generateInfoWindow(position.timestamp);
      this.renderRoute();
    });
  }

  private infoWindowEvents() {
    GoogleMapEvent.addListener(this.submarineMarker, 'click', () => {
      this.mapInfoWindow.open(this.googleMap);
    });
  }
}
