import {ACTION_TYPES} from '../../../ActionTypes';

const initialState = {
  
};

const homeReducer = (state = initialState, action) => {
  // console.log("Data in Redux ===>>> ", action.data)
  switch (action.type) {

    case ACTION_TYPES.UPDATE_USER_DATA:
      return {
        ...state,
        // userToken: action.data.token,
        userUpdatedData: action.data,
      };
    case ACTION_TYPES.ACTIVE_STORE:
      console.log("in acitve store data")
      return {
        ...state,
        // userToken: action.data.token,
        activeStoreData: action.data,
      };

      case ACTION_TYPES.UPDATE_USER_LEVEL:
        console.log('Getting user level in REDUX',action.data)
        return {
          ...state,
          // userToken: action.data.token,
          userUpdatedLevel: action.data,
        };

        case ACTION_TYPES.UPDATE_HOST_LEVEL:
        console.log('Getting host level in REDUX',action.data)

        return {
          ...state,
          // userToken: action.data.token,
          hostUpdatedLevel: action.data,
        };
        case ACTION_TYPES.UPDATE_EDITPROFILE:
        console.log('Getting UPDATE_EDITPROFILE REDUX',action.data)

        return {
          ...state,
          // userToken: action.data.token,
          hostUpdatedLevel: action.data,
        };

    // case ACTION_TYPES.LOGOUT:
    //   return {
    //     ...state
    //   };

    default:
      return state;
  }
};

export default homeReducer;
