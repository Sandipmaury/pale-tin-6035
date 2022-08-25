export default function reducer(state, actions) {
  switch (actions.type) {
    case "IS_AUTH":
      return { ...state, isAuth: actions.payload };
    case "IS_DATA_LOGING":
      return { ...state, isLoding: actions.payload };
    case "IS_FETCHING_FAILED":
      return { ...state, isError: actions.payload };
    case "IS_DATA_FETCHED":
      return { ...state, data: actions.payload };
    case "DARK_MODE":
      return { ...state, isDarkMode: actions.payload };
    default:
      return state;
  }
}
