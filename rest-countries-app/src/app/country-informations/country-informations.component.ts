import { Component, Input, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { CountriesApiService } from '../countries-api.service';
import { Countries } from '../classes/class';
import { Location } from '@angular/common';

@Component({
  selector: 'app-country-informations',
  templateUrl: './country-informations.component.html',
  styleUrls: ['./country-informations.component.css'],
})
export class CountryInformationsComponent implements OnInit {
  arrowLeftIcon = faArrowLeft;
  country: Countries[];
  selectedCountry: Countries;
  currency;
  language;
  borderCountries;
  defaultNames = [];

  constructor(
    private countryApi: CountriesApiService,
    private _location: Location
  ) {}
  ngOnInit(): void {
    this.countryApi.getSelectedCountry.subscribe((data) => {
      this.selectedCountry = data;

      this.currency = Object.values(this.selectedCountry.currencies)[0];
      this.language = Object.values(this.selectedCountry.languages)[0];
    });

    this.countryApi.getAllCountries().subscribe((data) => {
      // Assuming this.selectedCountry.borders is an array of cca3 codes
      this.defaultNames = this.selectedCountry.borders.map((borderCode) => {
        const matchingCountry = data.find(
          (element) => element.cca3 === borderCode
        );
        return matchingCountry
          ? matchingCountry.name.common
          : 'Unknown Country';
      });
    });
  }

  goBack() {
    this._location.back();
  }

  backClicked() {
    this._location.back();
  }
}
