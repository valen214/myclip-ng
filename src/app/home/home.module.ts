import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { TopNavComponent } from "./top-nav/top-nav.component";
import { SharedModule } from '../shared/shared.module';

console.log(SharedModule)

@NgModule({
  declarations: [ HomeComponent, TopNavComponent ],
  imports: [CommonModule, SharedModule, HomeRoutingModule]
})
export class HomeModule {}
