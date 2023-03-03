import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-box',
  template: `
    <div class="mb-3">
      <label [for]="id" class="mb-2">{{ label }}</label>
      <div class="input-group">
        <input
          type="{{ type }}"
          class="form-control"
          [id]="id"
          [name]="name"
          [placeholder]="placeholder"
          (change)="update()"
          required
        />
      </div>
    </div>
  `,
})
export class InputBoxComponent {
  @Input() label: string = '';
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() value: any;

  update() {}
}
