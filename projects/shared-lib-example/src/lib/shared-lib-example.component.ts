import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-shared-lib-example',
  template: `
    <p>
      shared-lib-example works!
    </p>
  `,
  styles: [
  ]
})
export class SharedLibExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
