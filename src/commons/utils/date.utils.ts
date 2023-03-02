export class DateUtils {
  static getToday(): Date {
    const current = new Date().toISOString();
    const currentStr = current.substring(0, current.indexOf('T')).trim();

    return new Date(currentStr);
  }

  static getTodayStr(): string {
    const current = new Date().toISOString();
    return current.substring(0, current.indexOf('T')).trim();
  }

  //   static formatDate(dateStr: string): string {

  //   }
}
