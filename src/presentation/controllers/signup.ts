/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
export class SignupController {
  handle(httpRequest: any): any {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new Error('Missing param: name'),
      };
    }
    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new Error('Missing param: email'),
      };
    }
  }
}
