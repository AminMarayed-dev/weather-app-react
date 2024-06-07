import { api, apiKey } from "./config.api";

export async function getWeatherData({ city }: { city: string }) {
  const response = await api.get(`?q=${city}&appid=${apiKey}`);
  return response.data;
}
