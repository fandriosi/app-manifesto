import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

export class HandleError{
    constructor(private messageService: MessageService){}
    public handle<T>(operation ='operation', result?: T){
        return(error: any): Observable<T> => {
            this.log(`${operation} failed: ${error.message}`);
            console.error(error);
            return of(result as T);
          };
    }
    private log(message: string){
        this.messageService.add("CaminhaoService "+ message);
     }
}