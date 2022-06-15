import { AppointmentComponent } from './appointment.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { DropdownModule } from 'primeng/dropdown';
import { NgModule } from '@angular/core';
import { ShareModuleModule } from 'src/app/shared/shared.module';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [AppointmentListComponent, AppointmentComponent],
  imports: [BrowserModule, DropdownModule, ShareModuleModule, TableModule],
  exports: [AppointmentListComponent, AppointmentComponent],
})
export class AppointmentModuleModule {}
