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


const fetchFavouriteActivitiesApi = async () => {
    try {
        const id = getIdFromLocalCookie();
        const jwt = getTokenFromLocalCookie();

        const responseData = await fetch(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/favourite-activities`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${jwt}`,
                },
                method: 'GET',
            }
        ).then(response => response.json());

        return responseData;
    } catch (err) {
        console.log("Error at Fetch ChatApi: ", err);
        return { error: err };
    }
};


const updateFavouriteActivitiesApi = async (id, data) => {
    const updatedData = { data }
    console.log("dataL ", updatedData);
    try {
        const jwt = getTokenFromLocalCookie();

        const responseData = await fetcher(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/favourite-activities/${id}`,  // Include id in the URL
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${jwt}`,
                },
                body: JSON.stringify(updatedData),
                method: 'PUT',
            }
        )
        return responseData;
    } catch (err) {
        console.log("Error at Fetch ChatApi: ", err);
        return { error: err };
    }
};

async function updateUserAccounnt(data) {
    const jwt = getTokenFromLocalCookie();
    let id = getIdFromLocalCookie()
    if (jwt) {
        const user = await fetch(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/users/${id}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${jwt}`,
                },
                body: JSON.stringify(data)
            }
        );
        return await user.json();
    } else {
        return;
    }
}

async function changeUserPassword(data) {
    const jwt = getTokenFromLocalCookie();
    if (jwt) {
        const responseData = await fetch(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/change-password`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${jwt}`,
                },
                body: JSON.stringify(data),
            }
        );
        return await responseData.json();
    }
}

export {
    changeProfileImage,
    fetchFavouriteActivitiesApi,
    updateFavouriteActivitiesApi,
    updateUserAccounnt,
    changeUserPassword
}


