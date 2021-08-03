import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoUpdateComponent } from './contato/contato-update.component';
import { ContatoComponent } from './contato/contato.component';

const routes: Routes = [
  { path: '', component: ContatoComponent},
  { path: 'edit', component: ContatoUpdateComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
