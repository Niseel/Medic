import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { DoctorComponent } from './doctor.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorNewComponent } from './doctor-new/doctor-new.component';
import { DoctorNewDialogComponent } from './doctor-new-dialog/doctor-new-dialog.component';
import { DoctorService } from 'src/app/shared/services/doctor.service';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { IconsModule } from '../../../assets/icons/icons.module';
import { InputTextModule } from 'primeng/inputtext';
import { NgModule } from '@angular/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ShareModuleModule } from 'src/app/shared/shared.module';

const declarations = [
  DoctorComponent,
  // NewDoctorDialogComponent,
  DoctorNewDialogComponent,
  // FeaturesDoctorComponent,
  DoctorNewComponent,
  DoctorListComponent,
];

const imports: any = [
  ShareModuleModule,
  CommonModule,
  DialogModule,
  ButtonModule,
  InputTextModule,
  CheckboxModule,
  RadioButtonModule,
  RippleModule,
  FileUploadModule,
  SelectButtonModule,
  DropdownModule,
  BrowserModule,
  BrowserAnimationsModule,
]; //DoctorsRoutes

@NgModule({
  imports: [...imports],
  declarations: [...declarations],
  exports: [
    DoctorComponent,
    // NewDoctorDialogComponent,
    DoctorNewDialogComponent,
    // FeaturesDoctorComponent,
    DoctorNewComponent,
    DoctorListComponent,
  ],
  providers: [DoctorService],
})
export class DoctorModuleModule {}
