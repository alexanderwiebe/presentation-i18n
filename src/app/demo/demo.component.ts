import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'app-demo',
  },
})
export class DemoComponent implements OnInit {
  demoClicked: number = 0;

  constructor() {}

  incDemo() {
    this.demoClicked++;
  }

  ngOnInit(): void {}
}
