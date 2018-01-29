import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TreatmentsComponent } from './treatments/treatments.component';
import { RecommComponent } from './recomm/recomm.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';

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
    path:"products",
    component: ProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
