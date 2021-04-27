import { CustomError, CustomErrorObject } from './custom-error';

export class BadRequestError extends CustomError {
    statusCode = 400;

    constructor(message: string) {
        super(message);

        Object.setPrototypeOf(this, BadRequestError.prototype);
    }

    serializeErrors(): CustomErrorObject[] {
        return [{
            message: this.message
        }]
    }

}