export interface Event {
  id: number;
  name: string;
  date: string;
}

export interface Favorite {
  id: number;
  userID: string;
  EventID: number;
}
