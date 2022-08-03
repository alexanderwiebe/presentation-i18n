import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-is',
  templateUrl: './what-is.component.html',
  styleUrls: ['./what-is.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatIsComponent implements OnInit {
  headerClass = $localize`header american`;
  footerClass = $localize`footer american`;

  constructor() {}

  ngOnInit(): void {}
}
