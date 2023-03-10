import { Component, OnDestroy, OnInit } from '@angular/core';
import { BarController, BarElement, CategoryScale, Chart, Colors, Legend, LinearScale, Tooltip } from 'chart.js';
import { EmployeeHappinessService } from '../../services/employee-happiness.service';


Chart.register(
  Colors,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip
);

@Component({
  selector: 'app-chart-result',
  templateUrl: './chart-result.component.html',
  styleUrls: ['./chart-result.component.css']
})
export class ChartResultComponent implements OnInit, OnDestroy {

  chartData: [] = [];
  constructor(private employeeHappinessService: EmployeeHappinessService) { }

  ngOnDestroy(): void {
    localStorage.clear();
  }

  ngOnInit(): void {
    this.createChart();    
  }

  createChart(){
    if(localStorage.getItem('token') != null)
      this.chartData = JSON.parse(JSON.parse(localStorage.getItem('token') || '{}'));
      
    var myChart = new Chart('myChart', {
      type: 'bar',
      data: {
        labels: ['Work Environment', 'Benefits and compensation', 'Career Development'],
        datasets: [
          {
            barThickness: 100,            
            label: 'Happiness Index',
            data: this.chartData,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',                             
              'rgba(153, 102, 255, 0.2)',              
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',              
              'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {     
        plugins:{
          tooltip: {
            callbacks: {
              label: function(tooltipItem){
                return tooltipItem.dataset.label + ': ' + `${tooltipItem.formattedValue}.0%` ;
              }
            }
          }
        },  
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: (value, index, values) => {
                return `${value}.0%`;
              }
            }
          },
        },
      },
    });
  }

}
