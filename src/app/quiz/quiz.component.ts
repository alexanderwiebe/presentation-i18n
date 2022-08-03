import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'app-quiz',
  },
})
export class QuizComponent implements OnInit {
  headerClass = $localize`header american`;
  footerClass = $localize`footer american`;

  form = this.fb.group(
    {
      name: [''],
    },
    {
      updateOn: 'blur',
    }
  );

  ramoneEndings = [
    $localize` rock on`,
    $localize` party on`,
    $localize` right on`,
    $localize` righteous`,
    $localize` gnarly`,
    $localize` tublar`,
    $localize` way cool`,
    $localize` awesome`,
    $localize` groovy`,
    $localize` outrageous`,
    $localize` funky`,
    $localize` super`,
    $localize` rock on`,
  ];

  htmlTemplate = `\`\`\` html
  <label i18n>Enter your name: </label>
  <input formControlName="name" type="text" placeholder="Name" i18n-placeholder>
  <div *ngIf="form.get('name')?.value as name">
    <h3 i18n>Your Ramones name is:</h3>
    <h4 i18n>{{ name }} Ramone {{ ramoneEndings[name.length] }}</h4>
  </div>
  \`\`\`
  `;

  tsLocalize = `\`\`\` typescript
  ramoneEndings = [
    $localize\` rock on\`,
    $localize\` party on\`,
    // ⋮
    $localize\` rock on\`,
  ];
  \`\`\`
  `;

  xliffEg = $localize`
  \`\`\` xml
<trans-unit id="5655817595182674866" datatype="html">
    <source>
      <x id="INTERPOLATION" equiv-text="{{ name }}" />
      Ramone
      <x id="INTERPOLATION_1" equiv-text="{{ ramoneEndings[name.length] }}" />
    </source>
    <target state="translated">
      Montreal Canadians!
      <x id="INTERPOLATION_1" equiv-text="{{ ramoneEndings[name.length] }}" />
      !! congrats
      <x id="INTERPOLATION" equiv-text="{{ name }}" />
      eh?
    </target>
    ⋮
</trans-unit>
\`\`\`
  `;

  // form = this.fb.
  constructor(public fb: FormBuilder) {
    this.form.get('name')?.valueChanges.pipe(map((nameValue) => {}));
  }

  ngOnInit(): void {}
}
