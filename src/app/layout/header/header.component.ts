import { Component, Input } from '@angular/core';
import pkg from 'package.json'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {
  @Input() projectName = pkg.name
}
