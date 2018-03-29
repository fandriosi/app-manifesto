import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Caminhao } from 'app/caminhoes/Caminhao';
import { CaminhaoService} from 'app/caminhoes/caminhao.service';

@Component({
  selector: 'app-delete-caminhoes',
  templateUrl: './delete-caminhoes.component.html',
  styleUrls: ['./delete-caminhoes.component.scss']
})
export class DeleteCaminhoesComponent implements OnInit {
  caminhao: Caminhao;
  constructor(private route: ActivatedRoute, private caminhaoService: CaminhaoService, private location: Location) { }

  ngOnInit() {
    this.getCaminhao();
  }

  getCaminhao(): void{
    const id =+ this.route.snapshot.paramMap.get('id');
    this.caminhaoService.getCaminhao(id).subscribe(caminhao => this.caminhao = new Caminhao(caminhao));
  }


 delete(caminhoa: Caminhao){
    this.caminhaoService.deleteCaminhao(this.caminhao.id).subscribe();
    this.goBack();
  }
  private goBack(): void{
    this.location.back();
  }
}
