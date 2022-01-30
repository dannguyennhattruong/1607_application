import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  drawer_shown = true;

  setDrawer(shown:boolean) {
    this.drawer_shown = shown;
  }
}
