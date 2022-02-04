export interface ICustomError {
  message: string;
  statusCode: number;
}

class CustomAPIError extends Error implements ICustomError {
  private _statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message);
    this._statusCode = statusCode;
  }
  get statusCode() {
    return this._statusCode;
  }
}

export default CustomAPIError;
