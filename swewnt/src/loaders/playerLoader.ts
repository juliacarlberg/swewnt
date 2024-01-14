import axios from "axios";
import { Player } from "../models/Player";

export interface Loader {
  players: Player[];
}

export const playerLoader = async () => {
  let players: Player[] = [];

  // // Attempt to retrieve players from localStorage
  // if (localStorage.getItem("players")) {
  //   players = JSON.parse(localStorage.getItem("players") || "[]");
  // }

  // // If players are found in localStorage, return them
  // if (players.length > 0) {
  //   return { players };
  // }

  // If players are not found in localStorage, make an API request
  try {
    const response = await axios.get("http://localhost:5002/api/v1/players");
    players = response.data.data; // Assuming the API response directly contains the array of players
    localStorage.setItem("players", JSON.stringify(players)); // Save players to localStorage
  } catch (error) {
    console.error("Error fetching players:", error);
  }

  // Return the data object with the players array
  return { players };
};
