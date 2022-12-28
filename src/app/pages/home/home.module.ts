import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AppMaterialModule } from '../../app.material.module';
import { HomeComponent } from './home.component';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AppMaterialModule,
    ComponentsModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
