import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import {HomeComponent} from "./home/home.component";

// const URL = 'http://localhost:5000/remoteEntry.js';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'orders',
    loadChildren: () => loadRemoteModule({
      // remoteEntry: URL,
      remoteName: 'orders',
      exposedModule: './OrdersModule'
    })
      .then(m => m.OrdersModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
