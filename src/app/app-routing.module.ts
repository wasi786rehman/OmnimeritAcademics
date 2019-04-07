import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import { PhysicsComponent } from './physics/physics.component';
const routes: Routes = [
 
  {path:'physics',component:PhysicsComponent,
  children: [
    { path: 'main/:id', component: MainComponent }
  ]

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
