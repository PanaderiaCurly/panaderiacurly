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
import { OurServicesComponent } from './body/sections/our-services/our-services.component';
import { AboutComponent } from './body/sections/about/about.component';
import { PresentationComponent } from './body/sections/presentation/presentation.component';
import { WorksComponent } from './body/sections/works/works.component';
import { OurFeaturesComponent } from './body/sections/our-features/our-features.component';
import { OurTeamComponent } from './body/sections/our-team/our-team.component';
import { ScoreboardComponent } from './body/sections/scoreboard/scoreboard.component';
import { PricingComponent } from './body/sections/pricing/pricing.component';
import { SliderComponent } from './body/sections/slider/slider.component';
import { SocialPostsComponent } from './body/sections/social-posts/social-posts.component';
import { SubscribeBannerComponent } from './body/subscribe-banner/subscribe-banner.component';
import { ContactFormComponent } from './body/contact-form/contact-form.component';

@NgModule({
  declarations: [
    NgxLoadingBarComponent,
    WildLayoutComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    OurServicesComponent,
    AboutComponent,
    PresentationComponent,
    WorksComponent,
    OurFeaturesComponent,
    OurTeamComponent,
    ScoreboardComponent,
    PricingComponent,
    SliderComponent,
    SocialPostsComponent,
    SubscribeBannerComponent,
    ContactFormComponent
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
