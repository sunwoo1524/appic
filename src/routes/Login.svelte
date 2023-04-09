<script>
</script>

<div class="login-form">
    <input type="text" placeholder="Mastodon Server URL" class="url">
    <button class="submit">Submit!</button>
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