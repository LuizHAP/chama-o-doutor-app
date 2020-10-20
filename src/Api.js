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
    const req = await fetch(`${BASE_API}/answers`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_quiz,
        nomeColaborador,
        candPrefeito,
        governoKiko,
        candPrefKiko,
        querConhecer,
      }),
    });

    const json = await req.json();
    return json;
  },
};
