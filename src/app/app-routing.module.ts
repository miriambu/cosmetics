import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TreatmentsComponent } from './treatments/treatments.component';
import { RecommComponent } from './recomm/recomm.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"treatments",
    component: TreatmentsComponent
  },
  {
    path:"recomm",
    component: RecommComponent
  },
  {
    path:"gallery",
    component: GalleryComponent
  },
  {
    path:"contact",
    component: ContactComponent
  },
  {
    path:"about",
    component: AboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
