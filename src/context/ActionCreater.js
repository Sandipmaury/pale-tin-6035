export const isLogin = (value) => {
  return {
    type: "IS_AUTH",
    payload: value,
  };
};

export const isLoding = (value) => {
  return {
    type: "IS_DATA_LOGING",
    payload: value,
  };
};

export const isError = (value) => {
  return {
    type: "IS_FETCHING_FAILED",
    payload: value,
  };
};

export const isDataFetched = (value) => {
  return {
    type: "IS_DATA_FETCHED",
    payload: value,
  };
};

export const isDarkMode = (value) => {
  return {
    type: "DARK_MODE",
    payload: value,
  };
};
