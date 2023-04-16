<script>
    import 'material-icons/iconfont/material-icons.css';
</script>

<svelte:head>
    <title>APPIC</title>
</svelte:head>

<nav>

    <a href="/"><img src="logo.png" alt="Go to home" width="30"></a>
    <a href="/"><span class="material-icons">notifications</span></a>
    <a href="/"><span class="material-icons">group</span></a>
    <a href="/"><span class="material-icons">search</span></a>
    <a href="/"><span class="material-icons">account_circle</span></a>
</nav>

<slot></slot>

<style>
    :global(body) {
        background-color: #424242;
        margin: 0;
    }

    nav {
        display: flex;
        align-items: center;
        padding: 10px;
        color: white;
        border-bottom: solid gray 1px;
    }

    a {
        color: white;
        text-decoration: none;
        margin: 0 15px;
    }

    @media (max-width: 800px) {
        nav { 
            justify-content: space-around;
        }

        a {
            margin: 0;
        }
    }

    a span {
        font-size: 28px;
    }
</style>