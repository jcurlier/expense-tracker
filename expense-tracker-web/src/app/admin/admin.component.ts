import { Component, OnInit } from '@angular/core';
import { LoopBackConfig } from './../shared/sdk/index';
import { BASE_URL, API_VERSION } from './../shared/base.url';
import { Expense } from '../shared/sdk/models';
import { ExpenseApi } from '../shared/sdk/services';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  private expenses = [];

  constructor(private expenseApi: ExpenseApi) { 
    LoopBackConfig.setBaseURL(BASE_URL);
    LoopBackConfig.setApiVersion(API_VERSION);
    this.getExpenses();
  }

  ngOnInit() {
  }

  getExpenses(): void {
      this.expenseApi.find({
        include: [
          {
            relation: 'owner'
          }
        ],
        order: 'date DESC',
      }).subscribe((data) => {
        this. expenses = data;
      });
  }
}
