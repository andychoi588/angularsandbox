import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatIconModule } from '@angular/material';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, MatIconModule],
  exports: [HomeComponent],
})
export class HomeModule {}
