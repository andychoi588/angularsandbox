import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { SidebarItemComponent } from './sidebar-item/sidebar-item.component';
import { MatListModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SidebarComponent, SidebarItemComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
  ],
  exports: [
    SidebarComponent,
  ]
})
export class SidebarModule { }
