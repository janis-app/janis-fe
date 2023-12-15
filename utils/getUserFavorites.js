import { getIdFromLocalCookie, getTokenFromLocalCookie } from "@/lib/auth";
import axiosInstance from "@/lib/axiosLib";

export const getUserFavorites = async () => {
  const userId = getIdFromLocalCookie()
  const token = getTokenFromLocalCookie()
  return await axiosInstance.get(`/favorite-activities?filters[user][id][$eq]=${userId}&populate=*`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token
    },
  });
};
