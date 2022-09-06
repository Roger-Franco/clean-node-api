/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import { SignupController } from './signup';

describe('Signup Controller', () => {
  test('Should return 400 if no name is provided', () => {
    const sut = new SignupController(); // system under test
    const httpRequest = {
      body: {
        email: 'any_email@mail.com,',
        password: 'any_password,',
        passwordConfirmation: 'any_password,',
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new Error('Missing param: name'));
  });

  test('Should return 400 if no email is provided', () => {
    const sut = new SignupController(); // system under test
    const httpRequest = {
      body: {
        name: 'any_name,',
        password: 'any_password,',
        passwordConfirmation: 'any_password,',
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new Error('Missing param: email'));
  });
});
