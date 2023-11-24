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
  currency;
  language;

  constructor(private countryApi: CountriesApiService,private _location:Location) {}
  ngOnInit(): void {
    this.countryApi.getSelectedCountry.subscribe(data => {
      console.log(data);
      this.selectedCountry = data;

      this.currency = Object.values(this.selectedCountry.currencies)[0];
      this.language = Object.values(this.selectedCountry.languages)[0];
      console.log(this.language);
    })
  }

  goBack(){
    this._location.back()
  }
  
  backClicked() {
    this._location.back();
  }
  
}
