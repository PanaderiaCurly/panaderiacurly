import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WildLayoutComponent } from './layout/appLayout/wild-layout/wild-layout.component';

const routes: Routes = [
  {
    path: '',
    component: WildLayoutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
