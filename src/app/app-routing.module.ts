import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SponsersComponent } from './sponsers/sponsers.component';
import { TimelineComponent } from './timeline/timeline.component';

const routes: Routes = [
  {
    component : AboutUsComponent,
    path : "about-us"
  },
  {
    component : EventsComponent,
    path : "events"
  },
  {
    component : SponsersComponent,
    path : "sponsers"
  },
  {
    component : TimelineComponent,
    path : "timeline"
  },
  {
    component : HomeComponent,
    path : ""
  },
  {
    component : NotFoundComponent,
    path : "**"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
