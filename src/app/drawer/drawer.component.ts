import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DrawerService} from "../../service/DrawerService";

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit {

  constructor(private router: Router, private drawerService : DrawerService) {

  }

  ngOnInit(): void {
  }
  logout() {
    localStorage.removeItem('token');
    this.drawerService.toggleDrawer();
    this.router.navigate(['/login']);
  }

}
