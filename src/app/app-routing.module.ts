import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';


const routes: Routes = [
  { path: '', component: BodyComponent},
  { path: 'home', component: BodyComponent},
 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
