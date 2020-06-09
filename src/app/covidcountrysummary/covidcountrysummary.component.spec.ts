import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidcountrysummaryComponent } from './covidcountrysummary.component';

describe('CovidcountrysummaryComponent', () => {
  let component: CovidcountrysummaryComponent;
  let fixture: ComponentFixture<CovidcountrysummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidcountrysummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidcountrysummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
