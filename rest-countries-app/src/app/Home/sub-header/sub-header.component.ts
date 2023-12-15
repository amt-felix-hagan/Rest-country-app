import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

import { faSearch, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { CountriesApiService } from '../../countries-api.service';
import { Countries } from 'src/app/classes/class';
import { SearchCountryService } from '../search-country.service';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css'],
})
export class SubHeaderComponent implements OnInit {
  searchIcon = faSearch;
  angleDown = faAngleDown;
  isDropDownMenu = false;
  countryName: string = '';

  constructor(
    private countryService: CountriesApiService,
    private searchService: SearchCountryService,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {}

  setMessage(e: any) {
    this.searchService.setCountry(e.value);
  }

  onToggleClick() {
    this.isDropDownMenu = !this.isDropDownMenu;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isDropDownMenu = false;
    }
  }

  selectOption(event: Event) {
    this.isDropDownMenu = true;
  }

  test(e: any) {
    this.searchService.filterRegions(e.innerText);
  }
}
