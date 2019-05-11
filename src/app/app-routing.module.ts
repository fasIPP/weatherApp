import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  {
    path: 'map',
    component: MapComponent,
    data: { title: 'Map' }
  },
  { path: '',
    redirectTo: '/weather',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
