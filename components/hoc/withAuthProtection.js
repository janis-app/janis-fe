"use client"
// withAuthProtection.tsx
import { getIdFromLocalCookie } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import { useLayoutEffect } from 'react';

const withAuthProtection = (WrappedComponent) => {
    const ComponentWithAuth = (props) => {
        const router = useRouter();

        useLayoutEffect(() => {
            const getUserId = async () => {
                const userID = await getIdFromLocalCookie();
                console.log("UserId: ", userID);

                if (userID == null || userID == undefined) {
                    router.push('/login');
                }
            };

            getUserId();
        }, [router]);

        return <WrappedComponent {...props} />;
    };

    return ComponentWithAuth;
};

export default withAuthProtection;