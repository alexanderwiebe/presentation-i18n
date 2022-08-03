import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'app-build',
  },
})
export class BuildComponent implements OnInit {
  headerClass = $localize`header american`;
  footerClass = $localize`footer american`;

  extract = `\`\`\` bash
ng extract-i18n --output-path src/locale
  \`\`\``;

  patch = `\`\`\` bash
xliffmerge -p src/xliffmerge.json en-CA fr-CA
  \`\`\``;

  xliff = `\`\`\` xml
<trans-unit id="8953033926734869941" datatype="html">
  <source>Name</source>
  <target state="translated">Name eh?</target>
  <context-group purpose="location">
    <context context-type="sourcefile">src/app/quiz/quiz.component.html</context>
    <context context-type="linenumber">18</context>
  </context-group>
</trans-unit>
  \`\`\``;

  constructor() {}

  ngOnInit(): void {}
}
