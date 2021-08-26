import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

const URL = 'http://localhost:5000/remoteEntry.js';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'orders',
    loadChildren: () => loadRemoteModule({
      remoteEntry: URL,
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
