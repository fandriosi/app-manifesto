import { Component, OnInit } from '@angular/core';
import { Caminhao } from '../Caminhao';
import { CaminhaoService } from './caminhao.service'

@Component({
  selector: 'app-caminhoes',
  templateUrl: './caminhoes.component.html',
  styleUrls: ['./caminhoes.component.scss']
})
export class CaminhoesComponent implements OnInit {
  caminhoes: Caminhao[] ;
  constructor(private caminhaoService: CaminhaoService) { }
  ngOnInit() {
    this.getCaminhoes();
  }
  getCaminhoes(): void{
   this.caminhaoService.getCaminhoes().subscribe(caminhoes => this.caminhoes = caminhoes);
  }

}
