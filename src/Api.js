import axios from "axios";

const BASE_API = "https://chama-o-doutor-server.herokuapp.com/api";

export default {
  postAnswers: async (
    id_quiz,
    nomeColaborador,
    candPrefeito,
    governoKiko,
    candPrefKiko,
    querConhecer
  ) => {
    axios.post(`${BASE_API}/answers`, {
      id_quiz,
      nomeColaborador,
      candPrefeito,
      governoKiko,
      candPrefKiko,
      querConhecer,
    });
  },
};
