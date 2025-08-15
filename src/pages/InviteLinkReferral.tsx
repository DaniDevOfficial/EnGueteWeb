import {useParams} from "react-router-dom";
import {JoinMobileApp} from "../components/InviteLinkReferral/JoinMobileApp.tsx";


export function InviteLinkReferral() {
    const { token } = useParams();


    if (!token) {

        return <div>Error: No token provided.</div>;

    }


    return (
        <>
            <JoinMobileApp joinToken={token} />
        </>
    );
}