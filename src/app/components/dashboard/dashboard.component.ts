import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  _opened = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this._opened = !this._opened;
  }

}

