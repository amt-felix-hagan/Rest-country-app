import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Countries } from './classes/class';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CountriesApiService {
country: string;
private selectedCountry = new BehaviorSubject<any>({})
getSelectedCountry = this.selectedCountry.asObservable();

  constructor(private http: HttpClient) {  }



 

  getAllCountries(): Observable<any> {
   return this.http.get(`https://restcountries.com/v3.1/all`);
  }

  selectCountry(country: Countries) {
    this.selectedCountry.next(country);
  }
}
