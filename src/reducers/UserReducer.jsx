import { v4 as uuidv4 } from "uuid";

export const initialState = {
  user: [],
  answers: {
    firstAnswer: null,
    secondAnswer: null,
    thirdAnswer: null,
  },
};

export const UserReducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "ADD_FIRSTANSWER":
      return {
        ...state,
        answers: {
          ...state.answers,
          firstAnswer: action.payload,
        },
      };
    case "ADD_SECONDANSWER":
      return {
        ...state,
        answers: {
          ...state.answers,
          secondAnswer: action.payload,
        },
      };
    case "ADD_THIRDANSWER":
      return {
        ...state,
        answers: {
          ...state.answers,
          thirdAnswer: action.payload,
        },
      };
    default:
      return state;
  }
};
