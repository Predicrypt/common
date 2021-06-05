import { CustomError, CustomErrorObject } from "./custom-error";

export class NoApiKeyError extends CustomError {
  statusCode: number = 400;
  reason = "User must set apiKey and apiSecret";

  constructor() {
    super("User dont have apiKey");

    Object.setPrototypeOf(this, NoApiKeyError.prototype);
  }

  serializeErrors(): CustomErrorObject[] {
    return [{ message: this.reason }];
  }
}
