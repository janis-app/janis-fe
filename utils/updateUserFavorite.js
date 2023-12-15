import { getIdFromLocalCookie, getTokenFromLocalCookie } from "@/lib/auth";
import axiosInstance from "@/lib/axiosLib";
import axios from "axios";

export const updateUserFavorite = async (state, data) => {
  const userId = getIdFromLocalCookie();
  const token = getTokenFromLocalCookie();
  return await axios({
    url: state?.user?.user?.favorite_activity?.id
      ? process.env.NEXT_PUBLIC_STRAPI_URL +
        `/favorite-activities/${state?.user?.user?.favorite_activity?.id}`
      : process.env.NEXT_PUBLIC_STRAPI_URL + `/favorite-activities`,
    method: state?.user?.user?.favorite_activity ? "put" : "post",
    data: {
      data: {
        favourite_activities:data,
      },
    },
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};
