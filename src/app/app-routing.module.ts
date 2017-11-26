import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TreeDisplayComponent } from './tree/tree-display/tree-display.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { SimpleSvgComponent } from './drawing/simple-svg/simple-svg.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tree', component: TreeDisplayComponent },
  { path: 'binary-tree', component: TreeDisplayComponent },
  { path: 'simple-svg', component: SimpleSvgComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { useHash: true }
    ),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
