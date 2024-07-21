"use server";

export const fetchSpotifyProfile = async (token: string) => {
    const response = await fetch("https://api.spotify.com/v1/me", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.json();
}