import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { AccountComponent } from './account/account.component'; // <---


export const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'account',
        component: AccountComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {
}