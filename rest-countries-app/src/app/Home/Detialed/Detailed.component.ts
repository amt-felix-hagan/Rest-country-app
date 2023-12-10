import { Component } from '@angular/core';
import { Countries } from 'src/app/classes/class';
import { CountriesApiService } from 'src/app/countries-api.service';
import { SearchCountryService } from '../search-country.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Detailed',
  templateUrl: './Detailed.component.html',
  styleUrls: ['./Detailed.component.css'],
})
export class DetaieldComponent {
  countries: Countries[];
  defaultCountries: Countries[];
  selectedRegion;

  constructor(
    private countryApi: CountriesApiService,
    private searchService: SearchCountryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.countryApi.getAllCountries().subscribe((data) => {
      this.defaultCountries = data;
      this.countries = this.defaultCountries;
    });

    this.searchService.getEnteredCountry.subscribe((res) => {
      if (res === '') {
      this.countries = this.defaultCountries;
      } else {
        this.countries = this.defaultCountries.filter(
          (country: Countries) =>
            country.name.common.toLowerCase().includes(res.toLowerCase()) &&
            country.region.includes(this.selectedRegion)
        );
      }
    });

    this.searchService.getRegion.subscribe((data) => {
      this.selectedRegion = data;
      this.filterCountriesByRegion();
    });
  }
  filterCountriesByRegion() {
    if (this.selectedRegion === '') {
      this.countries = this.defaultCountries;
    } else {
      this.countries = this.defaultCountries.filter((country: Countries) =>
        country.region.includes(this.selectedRegion)
      );
    }
  }

  onClick(value: Countries) {
    this.countryApi.selectCountry(value);
    this.router.navigate(['/country']);
  }
}
