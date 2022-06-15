import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppointmentModuleModule } from './pages/appointment/appointment.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DashboardModuleModule } from '../app/pages/dashboard/dashboard.module';
import { DoctorModuleModule } from '../app/pages/doctor/doctor.module';
import { DoctorService } from './shared/services/doctor.service';
import { IconsModule } from '../assets/icons/icons.module';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { NgModule } from '@angular/core';
import { RequestInterceptor } from './shared/interceptor/request.interceptor';
import { ResponseInterceptor } from './shared/interceptor/response.interceptor';
import { ShareModuleModule } from './shared/shared.module';
import { ShowErrorDirective } from '../app/shared/directives/show-error.directive';

// import { AppointmentModuleModule } from '../app/pages/appointment/appointment.module';
// import { MaterialModule } from './material/material.module';

// import { ShareModuleModule } from './shared/share.module';

const declarations = [AppComponent, LayoutComponent];

@NgModule({
  declarations: [...declarations],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    AppointmentModuleModule,
    ShareModuleModule,
    DoctorModuleModule,
    DashboardModuleModule,
    IconsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useExisting: RequestInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useExisting: ResponseInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
