import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CaminhoesComponent } from './caminhoes/caminhoes.component';
import { MessageService } from './message.service';
import { CaminhaoService } from './caminhoes/caminhao.service';
import { AddCaminhoesComponent } from './caminhoes/add-caminhoes/add-caminhoes.component';
import { AppRoutingModule } from './app-routing.module';
import { EditCaminhoesComponent } from './caminhoes/edit-caminhoes/edit-caminhoes.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { DeleteCaminhoesComponent } from './caminhoes/delete-caminhoes/delete-caminhoes.component';


@NgModule({
  declarations: [
    AppComponent,
    CaminhoesComponent,
    AddCaminhoesComponent,
    EditCaminhoesComponent,
    DeleteCaminhoesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot()
  ],
  providers: [
    MessageService,
    CaminhaoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
