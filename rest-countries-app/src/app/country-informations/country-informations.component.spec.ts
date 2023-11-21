import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryInformationsComponent } from './country-informations.component';

describe('CountryInformationsComponent', () => {
  let component: CountryInformationsComponent;
  let fixture: ComponentFixture<CountryInformationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryInformationsComponent]
    });
    fixture = TestBed.createComponent(CountryInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
