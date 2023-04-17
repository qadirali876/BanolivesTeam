import {ACTION_TYPES} from '../ActionTypes';

export const loginRequest = data => ({
  type: ACTION_TYPES.LOGIN_REQUEST,
  data,
});
export const socialLoginRequest = data => {
  console.log("int request")
  return({
  type: ACTION_TYPES.SOCIAL_LOGIN_REQUEST,
  data,
})};
export const otpRequest = data => ({
  type: ACTION_TYPES.OTP_REQUEST,
  data,
});
export const signupRequest = data => ({
  type: ACTION_TYPES.SIGNUP_REQUEST,
  data,
});

export const setLoginData = data => ({
  type: ACTION_TYPES.SET_LOGIN_DATA,
  data,
});
export const logoutUser = data => ({
  type: ACTION_TYPES.LOGOUT,
});
export const updateUserData = data => ({
  type:ACTION_TYPES.UPDATE_USER_DATA,
  data,
})
export const activeStoreData = data => ({
  type:ACTION_TYPES.ACTIVE_STORE,
  data,
})
export const updateUserLevel = data => ({
  type:ACTION_TYPES.UPDATE_USER_LEVEL,
  data,
})

export const updateHostLevel = data => ({
  type:ACTION_TYPES.UPDATE_HOST_LEVEL,
  data,
})

export const updateEditProfile = data => ({
  type:ACTION_TYPES.UPDATE_EDITPROFILE,
  data,
})
