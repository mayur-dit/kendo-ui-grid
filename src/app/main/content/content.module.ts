import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {FuseSharedModule} from '@fuse/shared.module';

import {FuseContentComponent} from 'app/main/content/content.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [
    FuseContentComponent,
  ],
  imports: [
    RouterModule,
    FuseSharedModule,

    // custom modules
    SharedModule
  ],
  exports: [
    FuseContentComponent
  ]
})
export class FuseContentModule {
}
