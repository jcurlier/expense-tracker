import { NgModule }             from '@angular/core';
import { Routes, RouterModule, CanActivate} from '@angular/router';

// Import our components
import { LoginComponent } from './login/login.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { AdminComponent } from './admin/admin.component';
import { ReportComponent } from './report/report.component';

import { AuthGuard } from './auth-guard.service';

const appRoutes: Routes = [
  // Add the redirect
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  // Add our routes
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'expenses',
    component: ExpensesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'report',
    component: ReportComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}