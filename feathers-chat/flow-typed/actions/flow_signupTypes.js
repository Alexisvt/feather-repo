// @flow
declare type SignUpStringTypes = 'CREATE_USER';

declare type UserType = {
  email: string;
  password: string;
}

declare type CreateUserActionType = {
  type: SignUpStringTypes;
  payload: UserType;
}