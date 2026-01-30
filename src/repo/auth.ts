// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const apiUrl = import.meta.env.VITE_BACKEND_URL

export async function verifyEmail(token: string) {
    const url = `${apiUrl}auth/verify`;

    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Token': token
        },
    });
    if (!res.ok) {
        throw new Error(res.statusText);
    }


}

export async function createNewPassword(token: string, password: string) {
    const url = `${apiUrl}auth/newPassword`;
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Token': token
        },
        body: JSON.stringify({password: password}),
    });

    if (!res.ok) {
        throw new Error(res.statusText);
    }
}