import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntityComponent } from './Component/entity/entity.component';
import { ReopsComponent } from './Component/reops/reops.component';
import { SearchComponent } from './Component/search/search.component';

const routes: Routes = [
  {
    path:'entity',
    component: EntityComponent
  },
  {
    path:'repos',
    component: ReopsComponent
  },
  {
    path:'search',
    component: SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
