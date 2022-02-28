import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GreetingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
