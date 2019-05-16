import { SocketIoConfig } from 'ngx-socket-io';
import { environment } from '../../environments/environment';

export const socketConfig: SocketIoConfig = {
  url: environment.apiUrl,
  options: {},
};
