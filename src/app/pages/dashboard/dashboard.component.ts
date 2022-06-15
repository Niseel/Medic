import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [
    '../../../assets/styles/components/dashboard-page/dashboard.scss',
  ],
})
export class DashboardComponent implements OnInit {
  public widgets: any[] = [
    {
      label: 'Appointments',
      amount: 500,
      svg: 'calendar',
      sizeIcon: 'lg',
      background: 'first-color',
    },
    {
      label: 'Operations',
      amount: 104,
      svg: 'scissor',
      sizeIcon: 'lg',
      background: 'second-color',
    },
    {
      label: 'New Patients',
      amount: 150,
      svg: 'patient2',
      sizeIcon: 'lg',
      background: 'third-color',
    },
    {
      label: 'Earning',
      amount: 20500,
      svg: 'earn',
      sizeIcon: 'lg',
      background: 'fourth-color',
    },
  ];

  constructor() {}
  ngOnInit() {}
}
