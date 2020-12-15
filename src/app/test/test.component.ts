import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>its so cool</h2>
  <p>
  Adding my template inline baby
  </p>`,
  styles: [`h2 {
    color: red;
  }`]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
