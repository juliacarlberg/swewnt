export interface Player {
  id: number;
  imageUrl: string;
  firstname: string;
  lastname: string;
  dateofbirth: string;
  birthplace: string;
  height: string;
  playernumber: number;
  position: string;
  club: string;
}

export interface IApiResponse {
  players: Player[];
}
