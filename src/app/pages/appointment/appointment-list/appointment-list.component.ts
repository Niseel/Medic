import { Component, OnInit } from '@angular/core';

export interface ListItem {
  patient?: string;
  date?: string;
  time?: string;
  gender?: string;
  phoneNumber?: string;
  active?: boolean;
}

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: [
    '../../../../assets/styles/components/appointment-page/appointment.scss',
  ],
})
export class AppointmentListComponent implements OnInit {
  listItems: ListItem[] = [
    {
      patient: 'John',
      date: 'Sunday',
      time: '2020/12/31',
      gender: 'female',
      phoneNumber: '0583037276',
      active: true,
    },
    {
      patient: 'Anana',
      date: 'Sunday',
      time: '2020/12/31',
      gender: 'female',
      phoneNumber: '0583037276',
      active: false,
    },
    {
      patient: 'Wick',
      date: 'Sunday',
      time: '2020/12/31',
      gender: 'female',
      phoneNumber: '0583037276',
      active: true,
    },
  ];
  constructor() {}

  ngOnInit() {}
}
