import {GET_PROPERTIES} from './actions';

const initialState = {
  properties: [],
};
const propertiesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_PROPERTIES:
      return {...state, properties: action.payload};
    default:
      return state;
  }
};
export default propertiesReducer;
