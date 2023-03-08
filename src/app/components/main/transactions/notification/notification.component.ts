import { Component, OnInit } from '@angular/core';

import { NotificationService } from 'src/app/services/notification.service';
declare var bootstrap: any;

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  title!: string;
  time!: string;
  body!: string;
  color!: string;

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {}

  theshow(title: string, body: string, color: string): void {
    this.title = title;
    this.body = body;
    this.color = color;
    this.time = new Date().toLocaleTimeString(); // Add a timestamp to the notification

    if (this.color == 'success') {
      this.color = '#198754';
    } else if (this.color == 'danger') {
      this.color = '#dc3545';
    }

    console.log(this.color);

    const liveToast = document.getElementById('liveToast');

    if (liveToast) {
      const toast = new bootstrap.Toast(liveToast);
      toast.show();
    }
  }
}
