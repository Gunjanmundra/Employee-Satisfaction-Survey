import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WorkEnvironment, BenefitsAndCompensation, CareerDevelopment } from '../interfaces/employee-happiness.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeHappinessService {

  private url: string;

  constructor(private http: HttpClient) { 
    this.url = 'http://localhost:8080';
  }

  calculateHappinessIndex(workEnvironment: WorkEnvironment, benefitsAndCompensation: BenefitsAndCompensation, careerDevelopment: CareerDevelopment, envTotalValue: number, benefitTotalValue: number, careerTotalValue: number) {
    var body = {workEnvironment, benefitsAndCompensation, careerDevelopment, envTotalValue, benefitTotalValue, careerTotalValue}
    return this.http.post(this.url + '/calculateHappinessIndex', body, {
      responseType: 'text'
    });
  }
}
