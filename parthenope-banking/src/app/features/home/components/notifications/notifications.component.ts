import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  notifications: any[] = [];

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.homeService.getNotifications().subscribe(
      notifications => this.notifications = notifications
    );
  }
}