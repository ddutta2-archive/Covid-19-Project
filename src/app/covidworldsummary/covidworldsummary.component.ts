import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';
import { formatDate, DatePipe } from '@angular/common';

@Component({
  selector: 'app-covidworldsummary',
  templateUrl: './covidworldsummary.component.html',
  styleUrls: ['./covidworldsummary.component.css']
})
export class CovidworldsummaryComponent implements OnInit {
  products: any;
  updateddate: any;
  diff: any;
  todayDate: any;
  constructor(private covidAllDataService: CovidService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.CovidWorldSummaryMethod();
  }

  public CovidWorldSummaryMethod(): void {
    this.covidAllDataService.CovidGetAllDataMethod().
      subscribe(products => this.products = products);
  }

  GetInterval(): any{
    this.updateddate = this.datePipe.transform(this.products.updated,'yyyy-MM-dd h:mm:ss'); 
    this.todayDate = this.datePipe.transform(Date.now(),'yyyy-MM-dd h:mm:ss');
    this.diff = new Date(this.todayDate).getTime() - new Date(this.updateddate).getTime();    
    var days = Math.floor(this.diff / (60 * 60 * 24 * 1000));
    var hours = Math.floor(this.diff / (60 * 60 * 1000)) - (days * 24);
    var minutes = Math.floor(this.diff / (60 * 1000)) - ((days * 24 * 60) + (hours * 60));
    return minutes;
  }
}
