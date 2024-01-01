import axios from "axios";

export const getAllPlayers = async () => {
  try {
    const response = await axios.get("http://localhost:5002/api/v1/players");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
