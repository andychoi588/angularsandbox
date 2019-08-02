import { Component } from '@angular/core';
import { sidebarConfig } from '../configs/sidebar.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sidebarConfiguration = sidebarConfig;
}
