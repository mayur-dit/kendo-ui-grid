import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SortablejsModule} from 'angular-sortablejs';

import {MatAutocompleteModule, MatButtonModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule,} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {FuseWidgetModule} from "../../@fuse/components/widget/widget.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CdkTableModule} from "@angular/cdk/table";
import {FuseSharedModule} from "../../@fuse/shared.module";
import {HttpClientModule} from "@angular/common/http";
import {SavaNoDblClickDirective} from "./sava-no-dbl-click.directive";
import {ButtonGroupModule, ButtonsModule} from "@progress/kendo-angular-buttons";
import {GridModule} from "@progress/kendo-angular-grid";

let modules = [
  // Material modules
  MatSnackBarModule,
  MatTableModule,
  MatDialogModule,
  MatInputModule,
  MatFormFieldModule,
  MatRippleModule,
  MatIconModule,
  MatButtonModule,
  MatSelectModule,
  MatSidenavModule,
  MatGridListModule,
  MatCardModule,
  FormsModule,
  MatDividerModule,
  FlexLayoutModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatCheckboxModule,
  ReactiveFormsModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatAutocompleteModule,
  MatExpansionModule,
  MatChipsModule,
  MatListModule,
  MatRadioModule,
  MatMenuModule,
  NgxChartsModule,
  FuseWidgetModule,
  BrowserAnimationsModule,
  CdkTableModule,
  FuseSharedModule,
  HttpClientModule,
  SortablejsModule,

  ButtonsModule,
  ButtonGroupModule,
  GridModule

  // FuseContentModule
];

@NgModule({
  imports: [
    CommonModule,
    modules
  ],
  exports: [
    modules,
    SavaNoDblClickDirective
  ],
  declarations: [
    SavaNoDblClickDirective
  ],
})
export class SharedModule {
}
