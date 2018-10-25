import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DialogConfirmComponent} from './dialog-confirm/dialog-confirm.component';
import {SharedModule} from './shared.module';
import {DialogInputComponent} from './dialog-input/dialog-input.component';

let modules = [
  SharedModule
];

@NgModule({
  imports: [
    CommonModule,
    modules
  ],
  exports: [
    modules
  ],
  declarations: [
    DialogConfirmComponent,
    DialogInputComponent,
  ],
  entryComponents: [
    DialogConfirmComponent,
    DialogInputComponent,
  ]
})
export class AppSharedModule {
}
