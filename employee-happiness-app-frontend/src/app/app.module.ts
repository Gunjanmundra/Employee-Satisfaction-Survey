import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeHappinessIndexComponent } from './employee-happiness/module/employee-happiness-index/employee-happiness-index.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { ChartResultComponent } from './employee-happiness/module/chart-result/chart-result.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeHappinessIndexComponent,
    ChartResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,  
    MatTabsModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatSliderModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
