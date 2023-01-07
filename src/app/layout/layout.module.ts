import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

import { NgxLoadingBarComponent } from './ngx-loading-bar/ngx-loading-bar.component';
import { WildLayoutComponent } from './appLayout/wild-layout/wild-layout.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';

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
    LoadingBarRouterModule
  ],
  exports: [
    NgxLoadingBarComponent,
  ],
  providers: []
})
export class LayoutModule { }
