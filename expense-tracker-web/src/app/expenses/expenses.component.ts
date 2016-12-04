import { Component, OnInit } from '@angular/core';
import { LoopBackConfig } from './../shared/sdk/index';
import { BASE_URL, API_VERSION } from './../shared/base.url';
import { UserApi } from '../shared/sdk/services';
import { Expense } from '../shared/sdk/models';
import { ExpenseApi } from '../shared/sdk/services';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  private formVisible: boolean = false;
  private expenses: Expense[] = [];
  private expense: Expense;
  private current: number = -1;

  constructor(private userApi: UserApi, private expenseApi: ExpenseApi) { 
    LoopBackConfig.setBaseURL(BASE_URL);
    LoopBackConfig.setApiVersion(API_VERSION);

    this.getExpenses();
  }

  ngOnInit() {
  }

  getExpenses(): void {
      this.userApi.getExpenses(
        this.userApi.getCurrentId(),{order: 'date DESC'}).subscribe((data) => {
        this.expenses = data;
      });
  }

  delete(index) {
    this.expenseApi.deleteById(this.expenses[index].id).subscribe(() => {
        this.expenses.splice(index, 1);
    });
  }

  update(index) {
    this.current = index;
    this.expense = this.expenses[index];
    this.formVisible = true;
  }

  add() {
    this.expense = new Expense();
    this.formVisible = true;
  }

  cancel() {
    this.current = -1;
    this.formVisible = false;
  }

  save() {
    // this is an update
    if (this.current >= 0) {
        this.expenseApi.updateAttributes(this.expense.id, this.expense).subscribe((data) => {});
    // this is an add
    } else {
      this.expenseApi.create(this.expense).subscribe((data) => { alert(data); });
      this.expenses.push(this.expense);
    }
    this.formVisible = false;
    this.current = -1;
  }
}