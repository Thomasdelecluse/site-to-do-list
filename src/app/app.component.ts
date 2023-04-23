import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";
import {DrawerService} from "../service/DrawerService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  @ViewChild('drawer') drawer!: MatDrawer;

  constructor(private drawerService: DrawerService) {}

  ngAfterViewInit() {
    this.drawerService.setDrawer(this.drawer);

  }
  title = 'TodoList';
}



