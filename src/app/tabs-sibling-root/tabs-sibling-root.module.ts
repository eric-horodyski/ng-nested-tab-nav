import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsSiblingRootPage } from './tabs-sibling-root.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabsSiblingRootRoutingModule } from './tabs-sibling-root-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TabsSiblingRootRoutingModule
  ],
  declarations: [TabsSiblingRootPage]
})
export class TabsSiblingRootModule {}
