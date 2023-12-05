import { getIdFromLocalCookie, getTokenFromLocalCookie } from "@/lib/auth";
import axiosInstance from "@/lib/axiosLib";

export const getUserProfileDetails = async (userInfo) => {
  const userId = getIdFromLocalCookie()
  const token = getTokenFromLocalCookie()
  return await axiosInstance.get(`/users/${userId}?populate=*`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token
    },
  });
};
