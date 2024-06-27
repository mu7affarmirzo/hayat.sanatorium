import { BASE_URL } from "features/api/request";
import { storageService } from "features/api/storageService";
import { useRefreshTokenMutation } from "features/login/authService";

export const refreshTokenHandler = async () => {
    const refreshToken = storageService.load("refresh");
    const accessToken = storageService.load("token");

    const fetchRefresh = async (refreshToken: string) => {
        return await fetch(BASE_URL + '/token/refresh/', {
            method: "POST",
            body: JSON.stringify({ refresh: refreshToken }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
                'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
            },
        }).then((res) => res.json())

    }
    // const [fetchRefresh] = useRefreshTokenMutation();

    if (refreshToken) {
        try {
            const response = await fetchRefresh(refreshToken);
            console.log({ response }, "refresh token res ");
            const newAccessToken = response?.access;
            if (newAccessToken) {
                storageService.save("token", newAccessToken);
            }
        } catch (error) {
            throw error;
        }
    }
};
