"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { fetchSpotifyProfile } from "@/actions/spotify";
import Image from "next/image";

export const SpotifyProvider = () => {
  const [token, setToken] = useState("");
  const [profile, setProfile] = useState<any>({});

    //   fetch the token from the server
    useEffect(() => {
        fetch("/api/spotify/token")
            .then((res) => res.json())
            .then((data) => {
                setToken(data.token.value);
            });
    }, []);

    useEffect(() => {
        // fetch the user's profile with server action
        const fetchProfile = async () => {
            const data = await fetchSpotifyProfile(token);

            setProfile(data);
        }

        if (token) {
            fetchProfile();
        }
    }, [token]);

    console.log("profile", profile);

    const profileImage = (profile && profile.images?.[0].url);

  return (
    <>
        {(token === "") ? (
            <div>
                <Link href="/api/spotify/login">
                    <Button>Log in with Spotify</Button>
                </Link>
            </div>
        ) : (
            <div className="flex flex-col items-center">
                <h1 className="text-2xl font-bold">Spotify Profile</h1>
                {
                    profile ? (
                        <div>
                            <Image src={profileImage} width={200} height={200} alt="Spotify Profile Image" />
                            <h2>{profile.display_name}</h2>
                            <p>{profile.email}</p>
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )   
                }
            </div>
        )}
    </>
  );
};