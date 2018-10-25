import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {MatIconModule, MatSelectModule, MatSidenavModule} from '@angular/material';
import {FuseSharedModule} from '@fuse/shared.module';
import {FuseLoginComponent} from './login.component';
import {SharedModule} from "../shared/shared.module";


const routes = [
  {path: 'auth/login', component: FuseLoginComponent}
];

@NgModule({
  declarations: [
    FuseLoginComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    FuseSharedModule,
    SharedModule
  ]
})
export class LoginModule {
}
