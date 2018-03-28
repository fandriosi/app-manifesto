import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaminhoesComponent} from './caminhoes/caminhoes.component';
import { AddCaminhoesComponent } from './caminhoes/add-caminhoes/add-caminhoes.component';
import { EditCaminhoesComponent } from './caminhoes/edit-caminhoes/edit-caminhoes.component';

const routes: Routes = [
  { path: '', redirectTo: '/caminhoes', pathMatch: 'full' },
  { path: 'caminhoes', component: CaminhoesComponent },
  { path: 'caminhoes/add-caminhoes', component: AddCaminhoesComponent},
  { path: 'caminhoes/edit-caminhoes/:id', component: EditCaminhoesComponent}
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
