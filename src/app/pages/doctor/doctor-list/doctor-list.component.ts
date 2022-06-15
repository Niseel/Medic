import { Component, Input, OnInit } from '@angular/core';

import { DoctorModel } from 'src/app/shared/models/doctor.model';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['../../../../assets/styles/components/doctor-page/doctor.scss'],
})
export class DoctorListComponent implements OnInit {
  public items!: DoctorModel.DoctorInfo[];
  @Input('items')
  set dataItems(items: DoctorModel.DoctorInfo[]) {
    const me = this;
    me.items = [...items];
    me.items = me.items.map((val) => val);
  }

  constructor() {}

  ngOnInit() {}
}
