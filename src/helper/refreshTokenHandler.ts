import { storageService } from "features/api/storageService";
import { useRefreshTokenMutation } from "features/login/authService";

export const RefreshTokenHandler = async () => {
    const refreshToken = storageService.load("refreshToken");

    const [fetchRefresh] = useRefreshTokenMutation();

    if (refreshToken) {
        try {
            const response = await fetchRefresh(refreshToken);
            console.log(response, "refresh toeken res ");
            const newAccessToken = response;
            storageService.save("accessToken", newAccessToken);
        } catch (error) {
            throw error;
        }
    }
};
