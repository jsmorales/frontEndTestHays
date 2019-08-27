import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MainComponent} from './components/main/main.component';
import {HomeComponent} from './components/home/home.component';
import {StoreComponent} from './components/store/store.component';
import {UserComponent} from './components/user/user.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'store', component: StoreComponent},
      {path: 'user', component: UserComponent},
      {path: '', pathMatch: 'full', redirectTo: 'home'} // this path redirects to the child view employees on this case
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'main'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
