import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CovidworldsummaryComponent } from './covidworldsummary/covidworldsummary.component';
import { CovidcountrysummaryComponent } from './covidcountrysummary/covidcountrysummary.component';


const routes: Routes = [
  { path: '', redirectTo: '/world', pathMatch: 'full' },
  {path: 'world', component: CovidworldsummaryComponent},
  {path: 'countries', component: CovidcountrysummaryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
