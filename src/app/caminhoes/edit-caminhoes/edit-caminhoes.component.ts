import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import {ActivatedRoute } from '@angular/router';
import { CaminhaoService } from 'app/caminhoes/caminhao.service';
import { Caminhao} from 'app/caminhoes/Caminhao';

@Component({
  selector: 'app-edit-caminhoes',
  templateUrl: './edit-caminhoes.component.html',
  styleUrls: ['./edit-caminhoes.component.css']
})
export class EditCaminhoesComponent implements OnInit {
  @Input() caminhao: Caminhao;
  constructor(private route: ActivatedRoute, private caminhaoService: CaminhaoService,
      private location: Location) { }

  ngOnInit() {
    this.getCaminhao();
  }
  getCaminhao(): void{
    const id = + this.route.snapshot.paramMap.get('id');
    this.caminhaoService.getCaminhao(id).subscribe(caminhao => this.caminhao = new Caminhao(caminhao));
  }
  public onSubmit({value, valid}: {value: Caminhao, valid: boolean }){
    this.caminhao = value;
    this.caminhaoService.updateCaminhao(this.caminhao as Caminhao).subscribe();
    this.goBack();
  }
  private goBack(): void{
    this.location.back();
  }
}
