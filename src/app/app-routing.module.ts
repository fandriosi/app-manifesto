import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaminhoesComponent} from 'app/caminhoes/caminhoes.component';
import { AddCaminhoesComponent } from 'app/caminhoes/add-caminhoes/add-caminhoes.component';
import { EditCaminhoesComponent } from 'app/caminhoes/edit-caminhoes/edit-caminhoes.component';
import { DeleteCaminhoesComponent} from 'app/caminhoes/delete-caminhoes/delete-caminhoes.component';

const routes: Routes = [
  { path: '', redirectTo: '/caminhoes', pathMatch: 'full' },
  { path: 'caminhoes', component: CaminhoesComponent },
  { path: 'caminhoes/add-caminhoes', component: AddCaminhoesComponent},
  { path: 'caminhoes/edit-caminhoes/:id', component: EditCaminhoesComponent},
  { path: 'caminhoes/delete-caminhoes/:id', component: DeleteCaminhoesComponent }
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
