import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-profit-card',
  styleUrls: ['./profit-card.component.scss'],
  templateUrl: './profit-card.component.html',
})
export class ProfitCardComponent {

  flipped = false;

  @Input() title: string;
  @Input() value: string;
  @Input() prevValue: string;
  @Input() percent: number;
  @Input() label: string;
  @Input() icon: string;

  toggleFlipView() {
    this.flipped = !this.flipped;
  }
}
