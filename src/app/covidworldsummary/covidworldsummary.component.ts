import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';


@Component({
  selector: 'app-covidworldsummary',
  templateUrl: './covidworldsummary.component.html',
  styleUrls: ['./covidworldsummary.component.css']
})
export class CovidworldsummaryComponent implements OnInit {
  products: any;
  updateddate: string;
  constructor(private covidAllDataService: CovidService) { }

  ngOnInit(): void {
    this.CovidWorldSummaryMethod();
  }

  private CovidWorldSummaryMethod(): void {
    this.covidAllDataService.CovidGetAllDataMethod().
      subscribe(products => this.products = products);
  }
}
