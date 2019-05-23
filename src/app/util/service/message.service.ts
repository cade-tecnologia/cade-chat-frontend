import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Message } from '../../interface/message.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { SearchParams } from '../../interface/search-params.interface';
import { Pagination } from '../../interface/pagination.interface';

@Injectable()
export class MessageService {
  private readonly resourceUrl: string = environment.apiUrl + '/api/message';

  constructor(
    private http: HttpClient,
  ) { }

  public getAllMessage(search: SearchParams): Observable<Pagination<Message>> {
    const params = this.setParams(search);
    return this.http.get<Pagination<Message>>(this.resourceUrl, {params});
  }

  public setParams(params: SearchParams): HttpParams {
    return new HttpParams()
      .set('page', String(params.page))
      .set('limit', String(params.limit))
  }
}
