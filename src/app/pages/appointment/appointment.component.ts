import { Component, OnInit } from '@angular/core';

interface onType {
  name: string;
  code: string;
}
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: [
    '../../../assets/styles/components/appointment-page/appointment.scss',
  ],
})
export class AppointmentComponent implements OnInit {
  statusesFilterOption!: onType[];
  cabinetsFilterOption!: onType[];
  constructor() {}

  ngOnInit() {
    const me = this;
    me.statusesFilterOption = [
      { name: 'Online', code: 'online' },
      { name: 'Busy', code: 'busy' },
      { name: 'Offline', code: 'offline' },
    ];

    me.cabinetsFilterOption = [
      { name: 'Cardiologist', code: 'Pos-01' },
      { name: 'Pediatrics', code: 'Pos-02' },
      { name: 'Radiologistgist', code: 'Pos-03' },
      { name: 'Psychaiatrist', code: 'Pos-04' },
      { name: 'Neurologist', code: 'Pos-05' },
      { name: 'Dentist', code: 'Pos-06' },
    ];
  }

  showAddAppointment() {}
  showAddAppointmentDialog() {}
}
