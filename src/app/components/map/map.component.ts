import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import {} from 'googlemaps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {

  
  @ViewChild('mapcontainer', {static: false}) gmap: ElementRef;
  map: google.maps.Map;
  lat = null;
  lng = null;

  

  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 8,
  };

  

  constructor() {
    navigator.geolocation.getCurrentPosition( pos => {
      this.lng = pos.coords.longitude;
      this.lat = pos.coords.latitude;
    });
  }

  ngAfterViewInit() {
    this.mapInitializer();
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, 
    this.mapOptions);
   }

}

