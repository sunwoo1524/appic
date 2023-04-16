<script>
    import { createApp, getAuthURL, getAccessToken } from "./api/auth";

    let instance;

    async function login() {
        const url_regex = /^(?:(?:https?|ftp):\/\/)?(?:www\.)?[a-zA-Z0-9-\.]+\.[a-z]{2,}$/;

        if (url_regex.test(instance)) {
            let url;

            if (instance.includes("https://") || instance.includes("http://")) {
                url = instance;
            } else {
                url = "https://" + instance;
            }

            const app = await createApp(url);
            const auth_url = getAuthURL(url, app);

            location.href = auth_url;
        }
    }
</script>

<div class="login-form">
    <input type="text" placeholder="Mastodon Server URL" class="url" bind:value={instance}>
    <button class="submit" on:click={login}>Submit!</button>
</div>

<style>
    .login-form {
        display: flex;
        margin-top: 50px;
        justify-content: center;
    }

    .url {
        width: 300px;
        box-sizing: border-box;
        padding: 5px;
        font-size: 16px;
        border: none;
        color: white;
        border-bottom: solid gray 1.5px;
        background-color: #12345600;
    }

    @media (max-width: 800px) {
        .url {
            width: 75%;
        }
    }

    .url:focus {
        outline: none;
        border-bottom-color: white;
    }

    .submit {
        padding: 10px;
        background-color: gray;
        color: white;
        border: none;
        margin-left: 5px;
        border-radius: 5px;
    }
</style>