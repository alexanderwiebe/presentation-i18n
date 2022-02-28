import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GreetingsComponent implements OnInit {
  hoodyCost = 18.99;
  constructor() {}

  ngOnInit(): void {}
}
