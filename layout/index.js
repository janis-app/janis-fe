import { AppContext } from "@/components/context/AppContext";
import { fetcher } from "@/lib/api";
import {
    getIdFromLocalCookie,
    getTokenFromLocalCookie,
} from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

const Layout = ({ children }) => {

    const router = useRouter();

    const {dispatch} = useContext(AppContext)

    useEffect(() => {
        const fetchUser = async () => {
            const jwt = getTokenFromLocalCookie();
            // console.log("getTokenFromLocalCookie: ", jwt);
            const userData = await fetcher(
                `${process.env.NEXT_PUBLIC_STRAPI_URL}/users/me?populate=profile_image`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            );
            if (userData?.id) {
                dispatch({ type: "USER", payload: userData });

            }
        }

        const token = getTokenFromLocalCookie()
        console.log("Token: ", token);

        if (getTokenFromLocalCookie()) {
            fetchUser()
        }
    }, [])

    return (
        <>{children}</>
    );
};

export default Layout;
