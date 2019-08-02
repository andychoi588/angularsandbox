import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { SidebarItem } from 'src/app/sidebar/sidebar.model';
import { DEFAULT_SIDEBARITEM } from '../sidebar.const';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarItemComponent implements OnInit {
  @Input()
  item: SidebarItem = DEFAULT_SIDEBARITEM;

  constructor() {}

  ngOnInit() {}
}
