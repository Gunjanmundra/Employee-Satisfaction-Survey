package com.example.employee.model;

import lombok.Data;

@Data
public class EmployeeHappiness {
	public WorkEnvironment workEnvironment;
	public BenefitsAndCompensation benefitsAndCompensation;
	public CareerDevelopment careerDevelopment;
	public int envTotalValue;
	public int benefitTotalValue;
	public int careerTotalValue;
}
