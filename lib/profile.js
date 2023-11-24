import { fetcher } from "./api";
import { getIdFromLocalCookie, getTokenFromLocalCookie } from "./auth";

async function changeProfileImage(picture, userId, token) {
    if (picture) {
        const data = new FormData();
        // const userId = getIdFromLocalCookie()

        data.append('files', picture);
        data.append('refId', `${userId}`);
        data.append('ref', "plugin::users-permissions.user");
        data.append('field', 'profile_image');

        try {
            const response = await fetcher(
                `${process.env.NEXT_PUBLIC_STRAPI_URL}/upload`,
                {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    body: data
                }
            );
            console.log("Response of the image Upload: ", response);
            if (response) {
                return {
                    success: true,
                    profile_image: {
                        ...response[0]
                    },
                };
            }
        } catch (error) {
            console.log('error is at Catch Section: ', error);
            return {
                success: false,
                error: 'something went wrong while linking image',
            };
        }
    }
}


export {
    changeProfileImage,
}