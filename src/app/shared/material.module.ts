import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

const materialModules = [
  MatSidenavModule
];

@NgModule({
  declarations: [],
  imports: [materialModules],
  exports: [materialModules],
})
export class MaterialModule { }
