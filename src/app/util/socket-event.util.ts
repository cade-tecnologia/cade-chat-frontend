/**
 * Lista de eventos disponiveis
 * - RECENT_MESSAGE
 * - RECEIVE
 */
enum SocketEventUtil {
  /**
   * Event: sendRecentMessage
   */
  RECENT_MESSAGE = 'sendRecentMessage',

  /**
   * Event: receiveMessage
   */
  RECEIVE = 'receiveMessage',
}

export default SocketEventUtil;
