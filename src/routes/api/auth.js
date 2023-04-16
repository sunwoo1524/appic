export async function createApp(instance) {
    const res = await fetch(
        instance + "/api/v1/apps",
        {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                client_name: "APPIC",
                redirect_uris: location.origin,
                scopes: "read write follow push",
                website: location.origin,
            }),
        }
    );
    console.log(res);

    const app = await res.json();

    return app;
}

export function getAuthURL(instance, { client_id }) {
    const params = new URLSearchParams({
        redirect_uris: location.origin,
        client_id,
        scopes: "read write follow push",
        response_type: "code",
    });

    return instance + "/oauth/authorize?" + params.toString();
}

export async function getAccessToken(instance, code, { redirect_uris, client_id, client_secret }) {
    const res = await fetch(
        instance + "/oauth/token",
        {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                client_id,
                client_secret,
                redirect_uris,
                grant_type: "authorization_code",
                code: code,
                scope: "read write push follow",
            }),
        }
    );

    const token = await res.json();

    return token;
}
