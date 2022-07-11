import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsProviderModule } from '../icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { SpinnerModule } from '../components/spinner/spinner.module';

import { PageRoutingModule } from './pages-routing.module';
import { AccountModule } from './account/account.module'; // <---


import { PagesComponent } from './pages.component'; // <---

@NgModule({
  imports: [
    CommonModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    SpinnerModule,
    PageRoutingModule,
    AccountModule,
  ],
  declarations: [
    PagesComponent, // <---
  ],
})
export class PagesModule {
}