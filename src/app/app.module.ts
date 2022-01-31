import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbDropdownModule, NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { _1607_BaseComponent, _1607_ChatComponent, _1607_ContentComponent, _1607_DrawerComponent, _1607_FooterComponent, _1607_HeaderComponent } from './components';
import { _1607_DashBoardComponent, _1607_ApplicationsComponent } from './pages';
import { _1607_BaseService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    _1607_BaseComponent,
    _1607_HeaderComponent,
    _1607_ContentComponent,
    _1607_FooterComponent,
    _1607_DrawerComponent,
    _1607_DashBoardComponent,
    _1607_ApplicationsComponent,
    _1607_ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule, 
    ReactiveFormsModule,
    NgbDropdownModule,
    NgbTooltipModule
  ],
  providers: [
    _1607_BaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
