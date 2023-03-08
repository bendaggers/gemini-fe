import { Injectable } from '@angular/core';
import { NotificationComponent } from '../components/main/transactions/notification/notification.component';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  showToast(
    title: string,
    body: string,
    color: string,
    notificationComponent: NotificationComponent
  ): void {
    if (notificationComponent) {
      notificationComponent.theshow(title, body, color);
    }
  }
}
