import {Alert} from 'react-native';

const AUTH_URL = 'https://enigmatic-meadow-94776.herokuapp.com/authorization';

const validateAuthResponse = (response: any) => {
  if (response?.status === 'error') {
    Alert.alert(response.messageKey);
  }
  if (response?.status) {
    return response;
  }
};

export const authorize = async (email: string, password: string) => {
  const responseJSON = await fetch(AUTH_URL, {
    method: 'POST',
    body: JSON.stringify({email, password}),
  });
  const response = await responseJSON.json();
  const result = validateAuthResponse(response);
  return result;
};
