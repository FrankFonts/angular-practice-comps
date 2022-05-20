import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';

@NgModule({
  declarations: [CollectionsHomeComponent],
  imports: [CommonModule, CollectionsRoutingModule],
  // make this available outside the module
  exports: [],
})
export class CollectionsModule {}
