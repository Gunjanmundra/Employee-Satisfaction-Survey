import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartResultComponent } from './employee-happiness/module/chart-result/chart-result.component';
import { EmployeeHappinessIndexComponent } from './employee-happiness/module/employee-happiness-index/employee-happiness-index.component';

const routes: Routes = [
  { path: '', component: EmployeeHappinessIndexComponent },
  { path: 'result', component: ChartResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
