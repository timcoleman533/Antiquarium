import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { EventComponent } from './events/events.component';

const routes: Routes = [
  {
    path: 'main', component: MainComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'event', component: EventComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
