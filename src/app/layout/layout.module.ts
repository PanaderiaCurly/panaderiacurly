import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

import { NgxLoadingBarComponent } from './ngx-loading-bar/ngx-loading-bar.component';

@NgModule({
  declarations: [
    NgxLoadingBarComponent
  ],
  imports: [
    CommonModule,
    LoadingBarModule,
    LoadingBarRouterModule
  ],
  exports: [
    NgxLoadingBarComponent
  ],
  providers: []
})
export class LayoutModule { }
