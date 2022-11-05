import axios from "axios";

export const createProviderRequest = async (provider) =>
  await axios.post("http://localhost:4000/providers", provider);
