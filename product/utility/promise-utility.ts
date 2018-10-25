export class PromiseUtility {
  public static rejectPromise(message: any): Promise<any> {
    return new Promise((_resolve, reject) => { reject(message); });
  }
}