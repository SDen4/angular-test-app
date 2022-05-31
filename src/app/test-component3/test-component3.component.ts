import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-component3',
  templateUrl: './test-component3.component.html',
  styleUrls: ['./test-component3.component.scss'],
})
export class TestComponent3Component implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  toggle: boolean = true;
  curDay: Date = new Date();
  nativeCurrency: number = 100.5;

  onclickHandler() {
    this.toggle = !this.toggle;
  }
}
