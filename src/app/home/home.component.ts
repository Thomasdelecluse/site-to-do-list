import { Component, OnInit } from '@angular/core';
import {DrawerService} from "../../service/DrawerService";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private drawerService: DrawerService) { }

  ngOnInit(): void {
  }
  toggleDrawer() {
    this.drawerService.toggleDrawer();
  }
}
