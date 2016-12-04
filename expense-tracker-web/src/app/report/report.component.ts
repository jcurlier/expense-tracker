import { Component, OnInit } from '@angular/core';
import { LoopBackConfig } from './../shared/sdk/index';
import { BASE_URL, API_VERSION } from './../shared/base.url';
import { UserApi } from '../shared/sdk/services';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  private datasets = [
    {
      data: []
    }
  ];

  private labels = [];

  private options = {
    legend: {
      display: false
    },
    tooltips: {
        enabled: true,
        mode: 'single',
        callbacks: {
            label: function(tooltipItems, data) { 
                return '$' + parseInt(tooltipItems.yLabel).toLocaleString();
            }
        }
    },
    maintainAspectRatio: false,
    responsive: true,
    responsiveAnimationDuration: 0,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          callback: function(value, index, values) {
            return "$" + parseInt(value).toLocaleString();
          }
        }
      }]
    }
  };

  constructor(private userApi: UserApi) {
    LoopBackConfig.setBaseURL(BASE_URL);
    LoopBackConfig.setApiVersion(API_VERSION);
    this.getExpenses();
   }

  ngOnInit() {
  }

  getExpenses(): void {
    this.userApi.weeklyReport(this.userApi.getCurrentId()).subscribe((data) => {

      if (data && data.length > 0) {

        var labels = new Array(data.length);
        var results = new Array(data.length);

        for (var i=0; i<data.length; i++) {
          labels[i] =  data[i].yearWeek.toString().substr(0, 4) + '/' + data[i].yearWeek.toString().substr(4);
          results[i] = data[i].total;
        }

        this.labels = labels;
        this.datasets[0].data = results;
      }
    });
  }
}