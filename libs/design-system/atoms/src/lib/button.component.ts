import { Component, Input } from '@angular/core';

@Component({
  selector: 'bp-button',
  template: `<button>{{ text }}</button>`,
  styles: [
    `
      button {
        background-color: #f00;
      }
    `,
  ],
})
export class ButtonComponent {
  @Input() text = 'default button text';
}
