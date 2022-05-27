import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss'],
})
export class TestComponentComponent implements OnInit {
  constructor() {}

  testVar = 'test variable';
  testNumVar = 0;

  ngOnInit(): void {}

  onClick(): void {
    console.log('click on the test button!!!');
  }

  onDecrement(): void {
    this.testNumVar -= 1;
  }
  onIncrement(): void {
    this.testNumVar += 1;
  }
}
