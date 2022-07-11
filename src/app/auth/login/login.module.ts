import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzInputModule } from 'ng-zorro-antd/input';
import { LoginComponent } from './login.component';
import { RouterModule } from "@angular/router";
import {authLoginRoutes} from "./login.routing";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    RouterModule.forChild(authLoginRoutes),
    CommonModule,
    NzInputModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent],
})
export class LoginModule {}
