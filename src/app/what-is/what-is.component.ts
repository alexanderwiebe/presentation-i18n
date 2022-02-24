import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-what-is',
  templateUrl: './what-is.component.html',
  styleUrls: ['./what-is.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WhatIsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
