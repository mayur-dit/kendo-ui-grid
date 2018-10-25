import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import 'hammerjs';

import {FuseModule} from '@fuse/fuse.module';
import {FuseSharedModule} from '@fuse/shared.module';

import {fuseConfig} from './fuse-config';

import {AppComponent} from './app.component';
import {FuseMainModule} from './main/main.module';
import {LoginModule} from './login/login.module';
import {ConstantService} from './services/constant.service';
import {SharedModule} from './shared/shared.module';
import {AppSharedModule} from './shared/app-shared.module';
import {UtilsService} from './services/utils.service';
import {SortablejsModule} from 'angular-sortablejs';
import {DashboardModule} from "./main/content/dashboard/dashboard.module";
import {LayoutModule} from "@angular/cdk/layout";
import {DateAdapter, MAT_DATE_FORMATS, NativeDateAdapter} from "@angular/material";
import * as moment from "moment";
import {UserService} from "./services/user.service";
import {GroupService} from "./services/group.service";
import {AuthGuard} from "./services/auth.guard";

const appRoutes: Routes = [
  {path: '', redirectTo: 'auth/login', pathMatch: 'full'}
];

export const APP_DATE_FORMATS = {
  parse: {
    dateInput: {month: 'short', year: 'numeric', day: 'numeric'},
  },
  display: {
    dateInput: 'input',
    monthYearLabel: {year: 'numeric'}
  }
};

export class MyDateAdapter extends NativeDateAdapter {
  format(date: Date, displayFormat: Object): string {
    if (displayFormat === "input") {
      return moment(date).format("DD-MM-YYYY");
    }
    return date.toDateString();
  }
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    TranslateModule.forRoot(),

    // Fuse Main and Shared modules
    FuseModule.forRoot(fuseConfig),
    SortablejsModule.forRoot({animation: 150}),
    FuseSharedModule,
    FuseMainModule,
    LoginModule,
    SharedModule,
    DashboardModule,
    AppSharedModule,
    LayoutModule,
  ],
  exports: [],
  bootstrap: [
    AppComponent
  ],
  providers: [
    AuthGuard,
    ConstantService,
    UtilsService,
    UserService,
    GroupService,
    {provide: DateAdapter, useClass: MyDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}
  ]
})
export class AppModule {
  constructor(private utils: UtilsService) {
    this.utils.get_user_from_cookies();
  }
}
