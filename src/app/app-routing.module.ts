import { RouterModule, Routes } from '@angular/router';

import { AppointmentComponent } from '../app/pages/appointment/appointment.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { DoctorNewComponent } from './pages/doctor/doctor-new/doctor-new.component';
import { ErrorComponent } from '../app/pages/error/error.component';
import { NgModule } from '@angular/core';

// import { FeaturesDoctorComponent } from './pages/doctor/features-doctor/features-doctor.component';

const routes: Routes = [
  // {
  //   path: 'doctors',
  //   loadChildren: () =>
  //     import('../app/pages/doctor/doctor.module').then(
  //       (md) => md.DoctorModuleModule
  //     ),
  // },
  {
    path: 'doctors',
    component: DoctorComponent,
  },
  { path: 'doctors/:feature', component: DoctorNewComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
