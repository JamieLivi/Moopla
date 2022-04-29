import axios from 'axios';

export const GET_PROPERTIES = 'GET_PROPERTIES';
const endpoint =
  'https://sqsmo7vai7.execute-api.eu-west-1.amazonaws.com/dev/items/*';

export const getProperties = () => {
  return async (dispatch: any) => {
    const res = await axios.get(endpoint);
    if (res.data) {
      dispatch({
        type: GET_PROPERTIES,
        payload: res.data,
      });
    } else {
      console.log('Unable to fetch');
    }
  };
};
