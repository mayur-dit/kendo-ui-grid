import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import {AppSharedModule} from '../../../shared/app-shared.module';
import {DashboardComponent} from "./dashboard.component";
import {AuthGuard} from "../../../services/auth.guard";

const routes = [
  {
    path: 'dashboard', component: DashboardComponent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
    AppSharedModule,

  ],
  declarations: [
    DashboardComponent,
  ],
  exports: [],
  entryComponents: []
})
export class DashboardModule {
}
