import axios from "axios";

const API_ROOT = 'http://127.0.0.1:5000/api/';


// actions
export const REQUEST_CONFIG = 'REQUEST_CONFIG';
export const GET_CONFIG = 'GET_CONFIG';
export const REQUEST_LANG = 'REQUEST_LANG';
export const GET_LANG = 'GET_LANG';
export const REQUEST_PAGES = 'REQUEST_PAGES';
export const GET_PAGES = 'GET_PAGES';
export const REQUEST_SOCIAL_LINKS = 'REQUEST_SOCIAL_LINKS';
export const GET_SOCIAL_LINKS = 'GET_SOCIAL_LINKS';
export const REQUEST_NAV = 'REQUEST_NAV';
export const GET_NAV = 'GET_NAV';
export const REQUEST_PAGE_CONTENT = 'REQUEST_PAGE_CONTENT';
export const GET_PAGE_CONTENT = 'GET_PAGE_CONTENT';

// Config
export function requestConfig() {
  return {
    type: REQUEST_CONFIG
  };
}

export function getConfig(json) {
  return {
    type: GET_CONFIG,
    payload: {
      config: json,
      receivedAt: Date.now()
    }
  };
}

// thunk actions
export function configLoad() {
  return dispatch => {
    dispatch(requestConfig());
    return axios.get(API_ROOT + 'config')
      .then(function(response) {
        dispatch(getConfig(response.data))
      })
  }
}

// Pages
export function requestPages() {
  return {
    type: REQUEST_PAGES
  };
}

export function getPages(json) {
  return {
    type: GET_PAGES,
    payload: {
      pages: json,
      receivedAt: Date.now()
    }
  };
}

// thunk actions
export function pagesLoad(slug) {
  return dispatch => {
    dispatch(requestPages());
    return axios.get(API_ROOT + 'pages/'+ slug)
      .then(function(response) {
        dispatch(getPages(response.data))
      })
  }
}

// PageContent
export function requestPageContent() {
  return {
    type: REQUEST_PAGE_CONTENT
  };
}

export function getPageContent(json) {
  return {
    type: GET_PAGE_CONTENT,
    payload: {
      pageContent: json,
      receivedAt: Date.now()
    }
  };
}

// thunk actions
export function pageContentLoad(pageName) {
  return dispatch => {
    dispatch(requestPageContent());
    return axios.get(API_ROOT + 'pageContent/'+ pageName)
      .then(function(response) {
        dispatch(getPageContent(response.data))
      })
  }
}

// Nav
export function requestNav() {
  return {
    type: REQUEST_NAV
  };
}

export function getNav(json) {
  return {
    type: GET_NAV,
    payload: {
      nav: json,
      receivedAt: Date.now()
    }
  };
}

// thunk actions
export function navLoad() {
  return dispatch => {
    dispatch(requestNav());
    return axios.get(API_ROOT + 'pages/all')
      .then(function(response) {
        dispatch(getNav(response.data))
      })
  }
}

// Social Links
export function requestSocialLinks() {
  return {
    type: REQUEST_SOCIAL_LINKS
  };
}

export function getSocialLinks(json) {
  return {
    type: GET_SOCIAL_LINKS,
    payload: {
      socialLinks: json,
      receivedAt: Date.now()
    }
  };
}

// thunk actions
export function socialLinksLoad() {
  return dispatch => {
    dispatch(requestSocialLinks());
    return axios.get(API_ROOT + 'socialLinks')
      .then(function(response) {
        dispatch(getSocialLinks(response.data))
      })
  }
}
