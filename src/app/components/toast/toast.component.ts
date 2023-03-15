import { Component, TemplateRef } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { NgbToast, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-toasts',
  standalone: true,
  imports: [NgbToastModule, NgIf, NgTemplateOutlet, NgFor],
  template: `
    <ngb-toast
      *ngFor="let toast of toastService.toasts"
      [class]="toast.classname"
      [autohide]="true"
      [delay]="toast.delay || 5000"
    >
      <ng-template ngbToastHeader>
        <svg
          class="bd-placeholder-img rounded me-2"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <rect width="100%" height="100%" [attr.fill]="toast.color"></rect>
        </svg>
        <strong class="me-auto">{{ toast.title }}</strong>
      </ng-template>
      <span class="text-muted"> {{ toast.body }}</span>
    </ngb-toast>
  `,
  host: {
    class: 'toast-container position-fixed bottom-0 end-0 p-3 ',
    style: 'z-index: 1200',
  },
})
export class ToastComponent {
  constructor(public toastService: ToastService) {}
}
