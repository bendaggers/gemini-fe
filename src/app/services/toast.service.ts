import { Injectable, TemplateRef } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {
  toasts: any[] = [];

  show(
    title: string | TemplateRef<any>,
    body: string | TemplateRef<any>,
    color: string | TemplateRef<any>,

    options: any = {}
  ) {
    if (color == 'danger') {
      color = '#dc2f02';
    } else if (color == 'success') {
      color = '#52b788';
    } else {
      color = '#3a0ca3';
    }

    this.toasts.push({ title, body, color, ...options });
  }

  remove(toast: any) {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }

  clear() {
    this.toasts.splice(0, this.toasts.length);
  }
}
