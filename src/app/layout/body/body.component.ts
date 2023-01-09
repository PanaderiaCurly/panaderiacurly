import { Component, Input } from '@angular/core';
import pkg from 'package.json';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styles: [
  ]
})
export class BodyComponent {
  @Input() projectName = pkg.name
}
