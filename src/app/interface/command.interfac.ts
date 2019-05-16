export interface Command {
  user: (command: string) => string;
  msg: (command: string) => void;
}
