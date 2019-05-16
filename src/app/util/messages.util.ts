export class MessagesUtil {
  public static readonly USER_NOT_FOUND: string = 'Usuário não encontrado. Use o comando: $ user seuNome';

  public static COMMAND_NOT_FOUND(command: string): string {
    return `Comando ${command} não encontrado`;
  }
}
