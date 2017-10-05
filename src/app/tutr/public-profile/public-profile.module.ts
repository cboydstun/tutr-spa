import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PublicProfileRoutingModule } from './public-profile-routing.module';
import { ProfileComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    PublicProfileRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [ProfileComponent]
})
export class PublicProfileModule { }
