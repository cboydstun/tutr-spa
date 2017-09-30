import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicProfileRoutingModule } from './public-profile-routing.module';
import { ProfileComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    PublicProfileRoutingModule
  ],
  declarations: [ProfileComponent]
})
export class PublicProfileModule { }
