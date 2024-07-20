"use client";

import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";
import { signOut } from "next-auth/react";

const MainPage = () => {

    const handleSignOut = () => {
        signOut();
    }

    const user = useCurrentUser();

    return ( 
        <div>
            <h1>Welcome {user?.email}</h1>
            <Button onClick={handleSignOut}>Sign out</Button>
        </div>
     );
}
 
export default MainPage;