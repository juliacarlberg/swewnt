import axios from "../../node_modules/axios/index";

// const get = async <T>(url: string) => {
//   return await axios.get<T>(url);
// };

export async function createPlayer() {
  try {
    const response = await axios.post("http://localhost:5173/api/v1/players/", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.error("Ett fel uppstod", error);
  }
}
