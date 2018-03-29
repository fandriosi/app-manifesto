import { Component, OnInit, Input, Output } from '@angular/core';
import { CaminhaoService } from 'app/caminhoes/caminhao.service';
import { Caminhao } from 'app/caminhoes/Caminhao';

@Component({
  selector: 'app-add-caminhoes',
  templateUrl: './add-caminhoes.component.html',
  styleUrls: ['./add-caminhoes.component.scss']
})
export class AddCaminhoesComponent implements OnInit {
  private caminhao: Caminhao;

  constructor(private caminhaoService: CaminhaoService) { }

  ngOnInit() {
    this.caminhao = new Caminhao({cnpj: "", placa: "", prefixo: ""});
  }
  public onSubmit({value, valid}: {value: Caminhao, valid: boolean }){
    this.caminhao = value;
    this.caminhaoService.addCaminhao(this.caminhao as Caminhao).subscribe();
    this.refesh();
  }
  private refesh(){
    this.caminhao = new Caminhao({cnpj: "", placa: "", prefixo: ""});
  }
}
