import axios from "axios";

const apiConnection = axios.create({
   baseURL: "https://projeto-integrador-dpr05-production.up.railway.app",

  // Modo de desenvolvimento
  // baseURL: "http://localhost:3000",
});

//Verificação do token para o usuario acessar aplicação
apiConnection.interceptors.request.use(async (config) => {
  const userData = await localStorage.getItem("sacAdimax:users");
  const token = userData && JSON.parse(userData).token;
  config.headers.authorization = `Bearer ${token}`;

  return config;
});

export default apiConnection;
