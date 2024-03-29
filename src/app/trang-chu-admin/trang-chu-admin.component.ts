import { Component } from '@angular/core';

@Component({
  selector: 'app-trang-chu-admin',
  templateUrl: './trang-chu-admin.component.html',
  styleUrls: ['./trang-chu-admin.component.css']
})
export class TrangChuAdminComponent {
  isSidebarOpen: boolean = false;

  constructor() { }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    console.log(this.isSidebarOpen);
  }
}
