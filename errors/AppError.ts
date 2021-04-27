class AppError extends Error {

    statusCode: number;

    constructor(message, statusCode){
        super(message)

        this.statusCode = statusCode;
        Object.setPrototypeOf(this, AppError);
    }
}