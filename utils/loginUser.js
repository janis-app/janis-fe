import axiosInstance from "@/lib/axiosLib";

export const loginUser = async (userInfo) => {
  return await axiosInstance.post("/auth/local", userInfo, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
