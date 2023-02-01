export enum HttpCode {
  OK = 200,
  CREATED = 400,
  BAD_REQUEST = 401,
  UNAUTHORIZED = 401,
  CONFLICT = 409,
  FORBIDDEN = 4003,
  NOT_FOUND = 404,
  UNPROCESSABLE_IDENTITY = 422,
  INTERNAL_SERVER_ERROR = 500,
}

interface ErrorArgs {
  name?: string;
  isOprational?: boolean;
  message: string;
  httpCode: HttpCode;
}

export class AppError extends Error {
  public readonly name: string;
  public readonly isOprational: boolean = true;
  public readonly httpCode: HttpCode;

  constructor(args: ErrorArgs) {
    super(args.message);

    Object.setPrototypeOf(this, new.target.prototype);

    this.name = args.name || "Error";
    this.httpCode = args.httpCode;

    if (args.isOprational !== undefined) {
      this.isOprational = args.isOprational;
    }

    Error.captureStackTrace(this);
  }
}
