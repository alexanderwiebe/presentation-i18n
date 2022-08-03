import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-to-use',
  templateUrl: './how-to-use.component.html',
  styleUrls: ['./how-to-use.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HowToUseComponent implements OnInit {
  headerClass = $localize`header american`;
  footerClass = $localize`footer american`;

  constructor() {}

  ngOnInit(): void {}
}
