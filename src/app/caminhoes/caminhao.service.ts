import { Injectable } from '@angular/core';
import { Caminhao } from 'app/caminhoes/Caminhao';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from 'app/message.service';

const httpOptions ={
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CaminhaoService {
  private caminhoesUrl ='http://localhost:8080/WSApp-1.0/webresources/caminhao'
  constructor(private http: HttpClient, private messageService : MessageService) { }
  private handleError <T>(operation = 'operation', result?: T){
    return(error: any): Observable<T> =>{
      this.log(`${operation} failed: ${error.message}`);
      console.error(error);
      return of(result as T);
    };
  }
  private log(message: string){
    this.messageService.add("CaminhaoService "+ message);
  }
  getCaminhoes(): Observable<Caminhao[]>{    
    return this.http.get<Caminhao[]>(this.caminhoesUrl)
    .pipe(tap(Caminhao => this.log(`fetched Caminhões`)),
      catchError(this.handleError(`getCaminhao`,[]))
    );
  }

  addCaminhao(caminhao: Caminhao): Observable<Caminhao>{
      return this.http.post<Caminhao>(this.caminhoesUrl, caminhao, httpOptions)
      .pipe(tap((caminhao: Caminhao) => this.log(`add caminhao `)),
        catchError(this.handleError<Caminhao>('addCaminhao'))
      );
  }
  getCaminhao(id: number): Observable<Caminhao>{
    return this.http.get<Caminhao>(`${this.caminhoesUrl}/${id}`)
    .pipe(tap((caminhao: Caminhao) => this.log(`fetched caminhao id:${id}`)),
      catchError(this.handleError<Caminhao>('getCaminhao'))
    );
  }

  updateCaminhao(caminhao: Caminhao): Observable<any>{
    return this.http.put(this.caminhoesUrl, caminhao, httpOptions).
    pipe(tap(_ => this.log(`updated caminhoa id =${caminhao.id}`)),
    catchError(this.handleError<any>('updateCaminhao')));
  }

  deleteCaminhao(id: number ): Observable<Caminhao>{
    return this.http.delete<Caminhao>(`${this.caminhoesUrl}/${id}`, httpOptions).
    pipe(tap(_ => this.log(`delete caminhao id =${id}`)),
    catchError(this.handleError<Caminhao>('deleteCaminhao')));
  }
}