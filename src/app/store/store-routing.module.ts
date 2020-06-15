import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { AboutPointsComponent } from './about-points/about-points.component';


const routes: Routes = [{
  path: '',
  component: StoreComponent,
  children: [
    {
      path: 'produtos',
      component: ProductsComponent
    },
    
    {
      path: 'sobre',
      component: AboutComponent
    },
    {
      path: 'programa-pontos',
      component: AboutPointsComponent
    },

    {
      path: '',
      redirectTo: 'produtos',
      pathMatch: 'prefix'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
