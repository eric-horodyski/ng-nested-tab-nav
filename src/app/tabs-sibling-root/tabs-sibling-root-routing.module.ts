import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsSiblingRootPage } from './tabs-sibling-root.page';

const routes: Routes = [
  {
    path: '',
    component: TabsSiblingRootPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsSiblingRootRoutingModule {}
