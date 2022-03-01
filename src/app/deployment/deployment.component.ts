import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-deployment',
  templateUrl: './deployment.component.html',
  styleUrls: ['./deployment.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DeploymentComponent implements OnInit {
  build = `\`\`\` bash
ng build --localize
  \`\`\``;

  serve = `\`\`\` bash
ng serve --configuration=en-CA
  \`\`\``;

  angularJson = `\`\`\` javascript
"i18n": {
  "sourceLocale": { "code": "en-US", "baseHref": "en-US" },
  "locales": {
    "en-CA": {
      "translation": "src/locale/messages.en-ca.xlf",
      "baseHref": "en-CA"
    },
    "fr-CA": {
      "translation": "src/locale/messages.fr-ca.xlf",
      "baseHref": "fr-CA"
    }
  }
}
\`\`\``;

  constructor() {}

  ngOnInit(): void {}
}
