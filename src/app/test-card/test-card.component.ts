import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-card',
  templateUrl: './test-card.component.html',
  styleUrls: ['./test-card.component.scss'],
  interpolation: ['[[', ']]'],
})
export class TestCardComponent implements OnInit {
  constructor() {}

  @Input() userName: string = '';
  @Input() userAge: number = 0;

  ngOnInit(): void {}
}
