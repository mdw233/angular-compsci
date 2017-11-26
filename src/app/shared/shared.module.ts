import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ConsoleService } from './services/console.service';

@NgModule({
  declarations: [
    PageNotFoundComponent,
  ],
  providers: [
    ConsoleService,
  ]
})
export class SharedModule { }
