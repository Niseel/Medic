import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['../../../../assets/styles/share/_sidebar.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(private router: Router) {}

  public subModules: any[] = [
    { title: 'dashboard', svg: 'dashboard', sizeIcon: 'lg', isActive: true },
    {
      title: 'appointment',
      svg: 'appointment',
      sizeIcon: 'lg',
      isActive: false,
    },
    { title: 'doctors', svg: 'doctor', sizeIcon: 'lg', isActive: false },
    {
      title: 'departments',
      svg: 'department',
      sizeIcon: 'lg',
      isActive: false,
    },
    { title: 'patients', svg: 'patient', sizeIcon: 'lg', isActive: false },
    { title: 'chats', svg: 'message', sizeIcon: 'lg', isActive: false },
    { title: 'calls', svg: 'phone', sizeIcon: 'lg', isActive: false },
  ];

  ngOnInit(): void {}

  activateClass(subModule: any) {
    // console.log(this.router.url);
    const me = this;
    me.subModules = me.subModules.map((el) => {
      let rs = { ...el };
      rs.isActive = false;
      if (subModule.title === el.title) {
        rs.isActive = true;
      }
      return rs;
    });
    // console.log(me.subModules);
    // subModule.isActive = !subModule.isActive;
  }

  onTab(path: string) {
    const me = this;
    // alert('hello');
    me.router.navigate([path]);
  }
}
