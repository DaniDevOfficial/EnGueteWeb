import {useParams} from "react-router-dom";
import {useEffect} from "react";

export function OpenMobileInviteLink() {

    const { token } = useParams();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const link = import.meta.env.VITE_MOBILE_BASE_URL + 'app/invite?token=' + token;


    useEffect(() => {
        if (link) {
            window.open(link, "_blank")
        }
    }, [link])
    return (
        <>
        </>
    )
}