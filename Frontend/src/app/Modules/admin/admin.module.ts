import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMenuComponent } from './Components/admin-menu/admin-menu.component';

@NgModule({
  declarations: [AdminMenuComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AdminMenuComponent
  ]
})
export class AdminModule { }
