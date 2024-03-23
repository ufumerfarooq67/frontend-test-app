import { IUserPayload, IUserPayloadRaw } from "../interfaces";
import { toTitleCase } from "./string";

// Mapper function to map api response to custom interface
export function onUsersMap(items: IUserPayloadRaw[]): IUserPayload[] {
  console.log({ items });

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
        lat: item?.coordinates?.latitude ?? "0",
        lng: item?.coordinates?.longitude ?? "0",
      },
    };
  });
}
