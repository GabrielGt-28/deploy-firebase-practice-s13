import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../app.material.module';

import { NavbarComponent } from './navbar/navbar.component';
import { RegisterFormComponent } from './register-form/register-form.component';

@NgModule({
  declarations: [NavbarComponent, RegisterFormComponent],
  imports: [CommonModule, AppMaterialModule, ReactiveFormsModule],
  exports: [NavbarComponent, RegisterFormComponent],
})
export class ComponentsModule {}
