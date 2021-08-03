import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoUpdateComponent } from './contato-update.component';

const routes: Routes = [
 { path: 'edit', component: ContatoUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ContatoRoutingModule { }
