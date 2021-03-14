import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss']
})
export class PreferencesComponent implements OnInit {

  // Entertainment
  amusementParkCheck = false;
  aquariumCheck = false;
  artGalleryCheck = false;
  bowlingAlleyCheck = false;
  casinoCheck = false;
  gymCheck = false;
  libraryCheck = false;
  movieTheatreCheck = false;
  nightClubCheck = false;
  parkCheck = false;
  stadiumCheck = false;
  touristAttractionsCheck = false;
  zooCheck = false;

  // Food
  bakeryCheck = false;
  barCheck = false;
  cafeCheck = false;
  convStoreCheck = false;
  liqStoreCheck = false;
  takeoutCheck = false;
  restaurantCheck = false;
  superMarketCheck = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick1() {

    let but = document.getElementById("1");
    if(!this.amusementParkCheck) {
      but.className = "button is-primary"
      but.innerText
      this.amusementParkCheck = true;
    } else {
      but.className = "button is-primary is-outlined"
      this.amusementParkCheck = false;
    } 
  }

  onClick2() {

    let but = document.getElementById("2");
    if(!this.aquariumCheck) {
      but.className = "button is-primary"
      but.innerText
      this.aquariumCheck = true;
    } else {
      but.className = "button is-primary is-outlined"
      this.aquariumCheck = false;
    } 
  }

  onClick3() {

    let but = document.getElementById("3");
    if(!this.artGalleryCheck) {
      but.className = "button is-primary"
      but.innerText
      this.artGalleryCheck = true;
    } else {
      but.className = "button is-primary is-outlined"
      this.artGalleryCheck = false;
    } 
  }

  onClick4() {

    let but = document.getElementById("4");
    if(!this.bowlingAlleyCheck) {
      but.className = "button is-primary"
      but.innerText
      this.bowlingAlleyCheck = true;
    } else {
      but.className = "button is-primary is-outlined"
      this.bowlingAlleyCheck = false;
    } 
  }

  onClick5() {

    let but = document.getElementById("5");
    if(!this.casinoCheck) {
      but.className = "button is-primary"
      but.innerText
      this.casinoCheck = true;
    } else {
      but.className = "button is-primary is-outlined"
      this.casinoCheck = false;
    } 
  }

  onClick6() {

    let but = document.getElementById("6");
    if(!this.gymCheck) {
      but.className = "button is-primary"
      but.innerText
      this.gymCheck = true;
    } else {
      but.className = "button is-primary is-outlined"
      this.gymCheck = false;
    } 
  }

  onClick7() {

    let but = document.getElementById("7");
    if(!this.libraryCheck) {
      but.className = "button is-primary"
      but.innerText
      this.libraryCheck = true;
    } else {
      but.className = "button is-primary is-outlined"
      this.libraryCheck = false;
    } 
  }

  onClick8() {

    let but = document.getElementById("8");
    if(!this.movieTheatreCheck) {
      but.className = "button is-primary"
      but.innerText
      this.movieTheatreCheck = true;
    } else {
      but.className = "button is-primary is-outlined"
      this.movieTheatreCheck = false;
    } 
  }

  onClick9() {

    let but = document.getElementById("9");
    if(!this.nightClubCheck) {
      but.className = "button is-primary"
      but.innerText
      this.nightClubCheck = true;
    } else {
      but.className = "button is-primary is-outlined"
      this.nightClubCheck = false;
    } 
  }

  onClick10() {

    let but = document.getElementById("10");
    if(!this.parkCheck) {
      but.className = "button is-primary"
      but.innerText
      this.parkCheck = true;
    } else {
      but.className = "button is-primary is-outlined"
      this.parkCheck = false;
    } 
  }

  onClick11() {

    let but = document.getElementById("11");
    if(!this.stadiumCheck) {
      but.className = "button is-primary"
      but.innerText
      this.stadiumCheck = true;
    } else {
      but.className = "button is-primary is-outlined"
      this.stadiumCheck = false;
    } 
  }

  onClick12() {

    let but = document.getElementById("12");
    if(!this.touristAttractionsCheck) {
      but.className = "button is-primary"
      but.innerText
      this.touristAttractionsCheck = true;
    } else {
      but.className = "button is-primary is-outlined"
      this.touristAttractionsCheck = false;
    } 
  }

  onClick13() {

    let but = document.getElementById("13");
    if(!this.zooCheck) {
      but.className = "button is-primary"
      but.innerText
      this.zooCheck = true;
    } else {
      but.className = "button is-primary is-outlined"
      this.zooCheck = false;
    } 
  }

  onClick14() {

    let but = document.getElementById("14");
    if(!this.bakeryCheck) {
      but.className = "button is-primary"
      but.innerText
      this.bakeryCheck = true;
    } else {
      but.className = "button is-primary is-outlined"
      this.bakeryCheck = false;
    } 
  }

  onClick15() {

    let but = document.getElementById("15");
    if(!this.barCheck) {
      but.className = "button is-primary"
      but.innerText
      this.barCheck = true;
    } else {
      but.className = "button is-primary is-outlined"
      this.barCheck = false;
    } 
  }

  onClick16() {

    let but = document.getElementById("16");
    if(!this.cafeCheck) {
      but.className = "button is-primary"
      but.innerText
      this.cafeCheck = true;
    } else {
      but.className = "button is-primary is-outlined"
      this.cafeCheck = false;
    } 
  }

  onClick17() {

    let but = document.getElementById("17");
    if(!this.convStoreCheck) {
      but.className = "button is-primary"
      but.innerText
      this.convStoreCheck = true;
    } else {
      but.className = "button is-primary is-outlined"
      this.convStoreCheck = false;
    } 
  }

  onClick18() {

    let but = document.getElementById("18");
    if(!this.liqStoreCheck) {
      but.className = "button is-primary"
      but.innerText
      this.liqStoreCheck = true;
    } else {
      but.className = "button is-primary is-outlined"
      this.liqStoreCheck = false;
    } 
  }

  onClick19() {

    let but = document.getElementById("19");
    if(!this.takeoutCheck) {
      but.className = "button is-primary"
      but.innerText
      this.takeoutCheck = true;
    } else {
      but.className = "button is-primary is-outlined"
      this.takeoutCheck = false;
    } 
  }

  onClick20() {

    let but = document.getElementById("20");
    if(!this.restaurantCheck) {
      but.className = "button is-primary"
      but.innerText
      this.restaurantCheck = true;
    } else {
      but.className = "button is-primary is-outlined"
      this.restaurantCheck = false;
    } 
  }

  onClick21() {

    let but = document.getElementById("21");
    if(!this.superMarketCheck) {
      but.className = "button is-primary"
      but.innerText
      this.superMarketCheck = true;
    } else {
      but.className = "button is-primary is-outlined"
      this.superMarketCheck = false;
    } 
  }

}
