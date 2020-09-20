import { v4 as uuidv4 } from "uuid";

export const UserReducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        id: uuidv4(),
        name: action.payload.name,
        lastname: action.payload.lastname,
        email: action.payload.email,
      };
    case "ADD_FIRSTANSWER":
      return {
        ...state,
        candPrefeito: action.payload,
      };
    case "ADD_SECONDANSWER":
      return {
        ...state,

        governoKiko: action.payload,
      };
    case "ADD_THIRDANSWER":
      return {
        ...state,
        candPrefKiko: action.payload,
      };
    case "ADD_FOURTHANSWER":
      return {
        ...state,
        querConhecer: action.payload,
      };
    default:
      return state;
  }
};
