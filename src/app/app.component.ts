import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  drawer_shown: boolean | any = false;

  setDrawer(shown: boolean) {
    this.drawer_shown = shown;
  }

  ngOnInit(): void {
    if (window.innerWidth <= 696) {
      this.drawer_shown = false;
    }
  }
}
