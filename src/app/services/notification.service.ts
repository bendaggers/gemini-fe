import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  showToast(message: string): void {
    console.log(message);
  }
}
