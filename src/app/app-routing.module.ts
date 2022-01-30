import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { _1607_ApplicationsComponent } from './pages/_1607_applications/_1607_applications.component';
import { _1607_DashBoardComponent } from './pages/_1607_dashboard/_1607_dasboard.component';

export const routes: Routes = [
  {
    path : 'dashboard',
    component : _1607_DashBoardComponent,
    data : {
      pageName : `Dashboard`,
      iconName : `dashboard`,
      id : 0
    }
  },
  {
    path : 'applications',
    component : _1607_ApplicationsComponent,
    data : {
      pageName : `Applications`,
      iconName : `apps`,
      id : 1
    }
  },
  {
    path : '',
    redirectTo : 'dashboard',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash : true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
