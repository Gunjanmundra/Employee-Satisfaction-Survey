import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from "jquery";
import { buttonToggleOptions1, buttonToggleOptions2, employeeHappinessControl, radioOptions } from '../../configs/employee-happiness.config';
import { BenefitsAndCompensation, CareerDevelopment, WorkEnvironment } from '../../interfaces/employee-happiness.interface';
import { EmployeeHappinessService } from '../../services/employee-happiness.service';

@Component({
  selector: 'app-employee-happiness-index',
  templateUrl: './employee-happiness-index.component.html',
  styleUrls: ['./employee-happiness-index.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class EmployeeHappinessIndexComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  envTotalValue = 0;  
  benefitTotalValue = 0;  
  careerTotalValue = 0;  
  firstNextBtnClicked: boolean = false;
  secondNextBtnClicked: boolean = false;
  thirdNextBtnClicked: boolean = false;
  employeeHappinessControl = employeeHappinessControl;
  radioOptions = radioOptions;
  buttonToggleOptions1 = buttonToggleOptions1;
  buttonToggleOptions2 = buttonToggleOptions2;
  
  constructor(private fb: FormBuilder, private employeeHappinessService: EmployeeHappinessService, private router: Router) { }  

  ngOnInit(): void {
    this.createForm();

    for (let v of Object.values(employeeHappinessControl)) {
      if(v.group == 'envGroup')
        this.envTotalValue += v.max;
      else if(v.group == 'benefitGroup')
        this.benefitTotalValue += v.max;
      else if(v.group == 'careerGroup')
        this.careerTotalValue += v.max;
    }
  }

  createForm() {
    this.firstFormGroup = this.fb.group({      
      envRadio: ['', Validators.required],
      envButtonToggle: ['', Validators.required],  
      envSlider1: ['', Validators.required],   
      envSlider2: ['', Validators.required],            
    });

    this.secondFormGroup = this.fb.group({
      benefitRadio1: ['', Validators.required],
      benefitButtonToggle: ['', Validators.required],  
      benefitRadio2: ['', Validators.required],
      benefitSlider: ['', Validators.required],   
    });

    this.thirdFormGroup = this.fb.group({
      careerRadio1: ['', Validators.required],
      careerButtonToggle: ['', Validators.required],  
      careerRadio2: ['', Validators.required],      
    });
  }

  onClickNext(label: string){
    if(label == 'first')
      this.firstNextBtnClicked = true;
    else if(label == 'second')
      this.secondNextBtnClicked = true;      
  }

  onClickSubmit(){
    this.thirdNextBtnClicked = true;  
    if(!this.thirdFormGroup.valid)
      return;

    var work: WorkEnvironment =  this.firstFormGroup.getRawValue();
    var benefit: BenefitsAndCompensation =  this.secondFormGroup.getRawValue();
    var career: CareerDevelopment =  this.thirdFormGroup.getRawValue(); 
    
    this.employeeHappinessService
    .calculateHappinessIndex(work, benefit, career, this.envTotalValue, this.benefitTotalValue, this.careerTotalValue)    
    .subscribe({
      next: (res: any) => {
        localStorage.setItem('token',JSON.stringify(res));
        this.router.navigate(['/result']);
      },
      error: (e) => {
        console.log(e.message);
      },
    });   
  }

}
