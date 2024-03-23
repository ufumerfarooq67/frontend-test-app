import { BASE_AP_URL } from "../constants";
import { IRequestProp } from "../interfaces";

export async function onCallAPI(url: string = "", options: IRequestProp) {
  try {
    const response = await fetch(
      BASE_AP_URL +
        "" +
        `/?page=${options.pagination.page}&results=${options.pagination.results}`
    );
    const data = await response.json();
    return data;
  } catch (e) {
    return [];
  }
}
