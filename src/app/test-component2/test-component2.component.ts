import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-component2',
  templateUrl: './test-component2.component.html',
  styleUrls: ['./test-component2.component.scss'],
})
export class TestComponent2Component implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  testArray: { name: string; age: number }[] = [
    { name: 'Andrew', age: 43 },
    { name: 'Mark', age: 49 },
    { name: 'Lora', age: 61 },
    { name: 'Migel', age: 58 },
  ];

  // input example
  changedText = '';
  onchangeHandler(event: any) {
    this.changedText = event.target.value;
  }
}
