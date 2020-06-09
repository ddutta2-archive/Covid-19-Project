import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';
import { ICovidAllData } from '../ICovidData';

@Component({
  selector: 'app-covidcountrysummary',
  templateUrl: './covidcountrysummary.component.html',
  styleUrls: ['./covidcountrysummary.component.css']
})
export class CovidcountrysummaryComponent implements OnInit {
  products: any = [];
  constructor(private covidAllDataService: CovidService) { }

  ngOnInit(): void {
    this.CovidCountrySummaryMethod();
  }

  private CovidCountrySummaryMethod(): void {
    this.covidAllDataService.CovidByAllCountryMethod().
      subscribe(products => this.products = products);
  }

}
