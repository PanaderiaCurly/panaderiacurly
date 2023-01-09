import { Component, Input, isDevMode } from '@angular/core';

import pkg from 'package.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent {
  version = pkg.version
  stage = isDevMode() ? 'dev' : 'prod'
  @Input() projectName = pkg.name
}
