import { Component, Input, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { CountriesApiService } from '../countries-api.service';
import { Countries } from '../classes/class';
import {Location} from '@angular/common';

@Component({
  selector: 'app-country-informations',
  templateUrl: './country-informations.component.html',
  styleUrls: ['./country-informations.component.css']
})


export class CountryInformationsComponent implements OnInit{

  arrowLeftIcon = faArrowLeft;
  country: Countries[];
  selectedCountry: Countries;

  constructor(private countryApi: CountriesApiService,private _location:Location) {}
  ngOnInit(): void {
    this.countryApi.getSelectedCountry.subscribe(data => {
      this.selectedCountry = data;
    })


  //  this.countryApi.getSelectedCountry.subscribe(respond => {
  //     this.country = this.defaultCountries.filter((value: Countries) => {
  //       // value.includes()
  //     })
      
  //   });
  }

  goBack(){
    this._location.back()
  }
  
  backClicked() {
    this._location.back();
  }
  
}
