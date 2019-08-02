import { Component, OnInit, Input } from '@angular/core';
import { SidebarItem } from 'src/app/sidebar/sidebar.model';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss'],
})
export class SidebarItemComponent implements OnInit {
  @Input()
  item: SidebarItem = { title: 'Undefined', route: '' };

  constructor() {}

  ngOnInit() {}
}
