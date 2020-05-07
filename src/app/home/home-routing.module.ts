import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('../tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tabs-sibling-root',
    loadChildren: () => import('../tabs-sibling-root/tabs-sibling-root.module').then(m => m.TabsSiblingRootModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tabs',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
