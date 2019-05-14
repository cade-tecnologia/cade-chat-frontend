export class MessageUtil {

    private static readonly UNKNOW_COMMAND = 'Unknow command ';
    private static readonly VERIFY_CLASS = 'Verifique suas classes... kkkk`';

    public static getUnknowCommand(command: string): string {
        return this.UNKNOW_COMMAND + command + '!' + this.VERIFY_CLASS;
    }
}