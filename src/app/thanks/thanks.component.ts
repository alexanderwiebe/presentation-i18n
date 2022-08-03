import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.scss'],
})
export class ThanksComponent implements OnInit {
  headerClass = $localize`header american`;
  footerClass = $localize`footer american`;

  constructor() {}

  ngOnInit(): void {}
}
