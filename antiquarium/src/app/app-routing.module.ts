import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { EventComponent } from './events/events.component';
import { WaresComponent } from './wares/wares.component';

const routes: Routes = [
  {
    path: 'main', component: MainComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'event', component: EventComponent
  },
  {
    path: 'wares', component: WaresComponent
  },
  {
    path: '**', redirectTo: 'main'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
