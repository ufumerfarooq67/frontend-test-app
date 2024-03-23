import { BASE_AP_URL } from "../constants";
import { IPagination, IRequestProp } from "../interfaces";

// Function to call API
export async function onCallAPI(url: string = "", pagination: IPagination) {
  try {
    const response = await fetch(
      BASE_AP_URL +
        "" +
        `/?page=${pagination.page}&results=${pagination.results}`
    );
    const data = await response.json();
    return data;
  } catch (e) {
    return [];
  }
}
