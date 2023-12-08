import { AppContext } from "@/components/context/AppContext";
import { fetcher } from "@/lib/api";
import {
    getIdFromLocalCookie,
    getTokenFromLocalCookie,
} from "@/lib/auth";
import { fetchUserProfile } from "@/lib/profile";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

const Layout = ({ children }) => {

    const router = useRouter();

    const {dispatch} = useContext(AppContext)

    useEffect(() => {
        fetchUserProfile(dispatch)
    }, [])

    return (
        <>{children}</>
    );
};

export default Layout;
