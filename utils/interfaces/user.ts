export interface IUser {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

export interface IFetchHookUserData {
  isLoading: boolean;
  error: string;
  data: IUserPayloadRaw[];
  onRequest(): void;
}

export interface IUserPayloadRaw {
  id: {
    value: string;
  };
  name: {
    first: string;
    last: string;
  };
  login: {
    username: string;
  };
  gender: string;
  email: string;
  picture: {
    large: string;
    medium: string;
  };
  coordinates: {
    latitude: string;
    longitude: string;
  };
}

export interface IUserPayload {
  id: string;
  fullName: string;
  gender: string;
  email: string;
  username: string;
  picture: string;
  coordinates: {
    lat: string;
    lng: string;
  };
}
