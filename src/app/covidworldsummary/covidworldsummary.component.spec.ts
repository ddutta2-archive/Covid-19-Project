import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidworldsummaryComponent } from './covidworldsummary.component';

describe('CovidworldsummaryComponent', () => {
  let component: CovidworldsummaryComponent;
  let fixture: ComponentFixture<CovidworldsummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidworldsummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidworldsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
