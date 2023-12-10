import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchCountryService {
  private enteredCountry = new BehaviorSubject<string>('');
  getEnteredCountry = this.enteredCountry.asObservable();

  private continent = new BehaviorSubject<string>('');
  getRegion = this.continent.asObservable();

  filterRegions(region: string) {
    this.continent.next(region);
  }

  setCountry(countryName: string) {
    this.enteredCountry.next(countryName);
  }
}
