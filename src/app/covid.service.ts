import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ICovidAllData } from './ICovidData';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidService {
  private CovidAllData = "https://corona.lmao.ninja/v2/all?yesterday=" //"https://coronavirus-19-api.herokuapp.com/all";
  private CovidByAllCountry = "https://corona.lmao.ninja/v2/countries"; //"https://coronavirus-19-api.herokuapp.com/countries";

  constructor(private httpClient: HttpClient) { }

  public CovidGetAllDataMethod() {
    return this.httpClient.get(this.CovidAllData);
  }

  public CovidByAllCountryMethod(): any {
    return this.httpClient.get(this.CovidByAllCountry);
  }
}
