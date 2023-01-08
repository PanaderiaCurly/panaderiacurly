import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

import { NgxLoadingBarComponent } from './ngx-loading-bar/ngx-loading-bar.component';
import { WildLayoutComponent } from './appLayout/wild-layout/wild-layout.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [
    NgxLoadingBarComponent,
    WildLayoutComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    LoadingBarModule,
    LoadingBarRouterModule,
    SharedModule,
    MaterialModule
  ],
  exports: [
    NgxLoadingBarComponent,
  ],
  providers: []
})
export class LayoutModule { }
