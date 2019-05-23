import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../../interface/message.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class MessageService {
  private readonly resourceUrl: string = environment.apiUrl + '/api/message';

  constructor(
    private http: HttpClient,
  ) { }

  public getAllMessage(): Observable<Message[]> {
    return this.http.get<Message[]>(this.resourceUrl);
  }
}
