import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable, Subscriber } from 'rxjs';
import SocketEventUtil from '../socket-event.util';

@Injectable()
export class SocketService {
  constructor(
    private socket: Socket,
  ) {}

  /**
   * Ouve um evento emitido
   * @param event Evento que vai ser ouvido
   * @return Observable<T> - Observable do tipo que foi passado
   */
  public on<T>(event: SocketEventUtil): Observable<T> {
    return new Observable<T>((observer: Subscriber<T>): void => {
      this.socket.on(event, (data: T) => {
        observer.next(data);
      });
    });
  }

  /**
   * Emite um evento
   * @param event Evento que vai ser emitido
   * @param data Dado que vai passado na emissão do evento
   * @return Observable<any> - Observable com os dados do Socket
   */
  public emit(event: SocketEventUtil, data: any): Observable<any> {
    return new Observable<any>((observer: Subscriber<any>): void => {
      const res = this.socket.emit(event, data);
      observer.next(res);
    });
  }
}
