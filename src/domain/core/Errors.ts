export class UnExpectedError extends Error {
  constructor(msg: string) {
    super(msg);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, UnExpectedError.prototype);
  }
}