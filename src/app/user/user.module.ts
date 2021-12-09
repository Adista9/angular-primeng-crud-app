import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAddFormComponent } from './user-add/user-add-form/user-add-form.component';
import { UserEditFormComponent } from './user-edit/user-edit-form/user-edit-form.component';

@NgModule({
  declarations: [
    UserAddFormComponent,
    UserEditFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
