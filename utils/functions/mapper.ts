import { IUserPayload, IUserPayloadRaw } from "../interfaces";
import { toTitleCase } from "./string";

export function onUsersMap(items: IUserPayloadRaw[]): IUserPayload[] {
  return items.map((item, index, arr): IUserPayload => {
    return {
      id: item.id.value,
      fullName: toTitleCase(
        (item.name.first + " " + (item?.name?.last ?? "")).trim() ?? ""
      ),
      email: item.email,
      picture: item.picture.large,
      username: item.login.username,
      gender: toTitleCase(item.gender),
      coordinates: {
        lat: item.coordinates.latitude,
        lng: item.coordinates.longitude,
      },
    };
  });
}
