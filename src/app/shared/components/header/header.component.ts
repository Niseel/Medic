import { Component, OnInit } from '@angular/core';

interface onType {
  name: string;
  icon: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../../../assets/styles/share/_header.scss'],
})
export class HeaderComponent implements OnInit {
  userOption!: onType[];

  constructor() {}

  ngOnInit() {
    const me = this;
    me.userOption = [
      { name: 'Profile', icon: 'online' },
      { name: 'Edit', icon: 'busy' },
      { name: 'Logout', icon: 'offline' },
    ];
  }
}
