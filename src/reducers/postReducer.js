import { FETCH_POSTS, NEW_POST } from "../actions/types";

const initState = {
  items: [],
  item: {}
};

// action: {type: string, payload: any}
const reducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
