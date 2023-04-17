import React from 'react';
import {BASE_URL, SITE_URL} from '../Constants';

export const ApiCall = async ({params, route, verb}) => {
  try {
    const url = `${BASE_URL}/${route}`;
    console.log('url', url);
    let options = {
      method: verb,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
      // body: params,
    };

    let response = await fetch(url, options);
    if (response) {
      return await response.json();
    } else {
      return response;
    }
  } catch (e) {
    return e.toString();
  }
};

export const StoriesApi = async ({route, verb}) => {
  try {
    const url = `${BASE_URL}/${route}`;
    let options = {
      method: verb,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify(params),
      // body: params,
    };

    let response = await fetch(url, options);
    if (response) {
      return await response.json();
    } else {
      return response;
    }
  } catch (e) {
    return e.toString();
  }
};

export const ApiCallFormData = async ({params, route, verb, paramsBody}) => {
  try {
    const url = `${BASE_URL}/${route}`;
     //console.log('url with token', url);
     //console.log('getting token', paramsBody);

    let options = {
      method: verb,
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${params}`,
      },
      body: paramsBody,
      // body: params,
    };

    let response = await fetch(url, options);
    if (response) {
      return await response.json();
    } else {
      return response;
    }
  } catch (e) {
    return e.toString();
  }
};

export const ApiCallToken = async ({params, route, verb, paramsBody}) => {
  try {
    const url = `${BASE_URL}/${route}`;
    // console.log('url with token', url);
    // console.log('getting token', params);

    let options = {
      method: verb,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${params}`,
      },
      body: JSON.stringify(paramsBody),
      // body: params,
    };

    let response = await fetch(url, options);
    if (response) {
      return await response.json();
    } else {
      return response;
    }
  } catch (e) {
    return e.toString();
  }
};

export const ApiUpdateUserData = async ({params, route, verb,paramsBody}) => {
  try {
    const url = `${BASE_URL}/${route}`;
    let options = {
      method: verb,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${params}`,
      },
      body: JSON.stringify(paramsBody),
      // body: params,
    };

    let response = await fetch(url, options);
    if (response) {
      return await response.json();
    } else {
      return response;
    }
  } catch (e) {
    return e.toString();
  }
};

