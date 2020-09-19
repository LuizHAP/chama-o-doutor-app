import { v4 as uuidv4 } from "uuid";

export const initialState = {
  user: [],
  answers: {
    candPrefeito: null,
    governoKiko: null,
    candPrefKiko: null,
    querConhecer: null,
  },
};

export const UserReducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        user: {
          id: uuidv4(),
          name: action.payload.name,
          lastname: action.payload.lastname,
          email: action.payload.email,
        },
      };
    case "ADD_FIRSTANSWER":
      return {
        ...state,
        answers: {
          ...state.answers,
          candPrefeito: action.payload,
        },
      };
    case "ADD_SECONDANSWER":
      return {
        ...state,
        answers: {
          ...state.answers,
          governoKiko: action.payload,
        },
      };
    case "ADD_THIRDANSWER":
      return {
        ...state,
        answers: {
          ...state.answers,
          candPrefKiko: action.payload,
        },
      };
    case "ADD_FOURTHANSWER":
      return {
        ...state,
        answers: {
          ...state.answers,
          querConhecer: action.payload,
        },
      };
    default:
      return state;
  }
};
