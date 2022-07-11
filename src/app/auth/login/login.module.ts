import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzInputModule } from 'ng-zorro-antd/input';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [CommonModule, NzInputModule],
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class LoginModule {}
