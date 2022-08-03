import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-team-canada',
  templateUrl: './team-canada.component.html',
  styleUrls: ['./team-canada.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamCanadaComponent implements OnInit {
  headerClass = $localize`header american`;
  footerClass = $localize`footer american`;

  constructor() {}

  ngOnInit(): void {}
}
