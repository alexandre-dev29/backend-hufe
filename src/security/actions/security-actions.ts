export enum SecurityActions {
  readOne = 'readOne',
  readAll = 'readAll',
  create = 'create',
  update = 'update',
  delete = 'delete',
  manage = 'manage',
}

export enum AuthSecurityActions {
  register = 'register',
  login = 'login',
  manage = 'manage',
  confirmPhoneNumber = 'confirmPhoneNumber',
  confirmOtp = 'confirmOtp',
  forgotPassword = 'forgotPassword',
  askingForOtp = 'askingForOtp',
  refreshToken = 'refreshToken',
  readOne = 'readOne',
}

export enum PropertiesSecurityActions {
  create = 'register',
  update = 'login',
  manage = 'manage',
  readOne = 'readOne',
  readAll = 'readAll',
  removeOne = 'removeOne',
}
