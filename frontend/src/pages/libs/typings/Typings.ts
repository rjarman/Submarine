import { Icons } from '../../components/Icons';
import { CommonEvents } from '../events/CommonEvents';
import { ControllerEvents } from '../events/ControllerEvents';
import { IndexEvents } from '../events/IndexEvents';
import { MapEvents } from '../events/MapEvents';
import {} from 'googlemaps';
import { Services } from '../Services';
import { ChatEvents } from '../events/ChatEvents';

export type IconComponent = Icons;
export const IconComponent = Icons;
export type CommonEvent = CommonEvents;
export const CommonEvent = CommonEvents;
export type IndexEvent = IndexEvents;
export const IndexEvent = IndexEvents;
export type ControllerEvent = ControllerEvents;
export const ControllerEvent = ControllerEvents;
export type MapEvent = MapEvents;
export const MapEvent = MapEvents;
export type GoogleMap = google.maps.Map;
export const GoogleMap = google.maps.Map;
export type MapOptions = google.maps.MapOptions;
export type LatLng = google.maps.LatLng;
export const LatLng = google.maps.LatLng;
export type MapMarker = google.maps.Marker;
export const MapMarker = google.maps.Marker;
export const MapAnimation = google.maps.Animation;
export const MapTravelMode = google.maps.TravelMode;
export const MapTrafficModel = google.maps.TrafficModel;
export type MapDirectionsService = google.maps.DirectionsService;
export const MapDirectionsService = google.maps.DirectionsService;
export type MapDirectionResult = google.maps.DirectionsResult;
export type MapDirectionStatus = google.maps.DirectionsStatus;
export type MapDirectionsRenderer = google.maps.DirectionsRenderer;
export const MapDirectionsRenderer = google.maps.DirectionsRenderer;
export type MapInfoWindow = google.maps.InfoWindow;
export const MapInfoWindow = google.maps.InfoWindow;
export const GoogleMapEvent = google.maps.event;
export type Service = Services;
export const Service = Services;
export const EarthRadius = 6371e3;
export interface DistanceMatrixParam {
  origin: {
    lat1: number;
    lng1: number;
  };
  destination: {
    lat2: number;
    lng2: number;
  };
}
export interface InfoWindowData {
  latitude: number;
  longitude: number;
  altitude: number;
  distance: number;
  gpsTime: string;
  gpsDate: string;
}
export interface DateOptions {
  weekday: string;
  year: string;
  month: string;
  day: string;
}
export type ChatEvent = ChatEvents;
export const ChatEvent = ChatEvents;
