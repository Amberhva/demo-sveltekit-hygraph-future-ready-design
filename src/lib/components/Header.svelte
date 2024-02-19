<script>
  export let data;
</script>

{#each data.headers as item}
    <section class="hero">
            <ul class="list">
                <li><img src={item.image.url} class="logo" alt="Logo Future Ready Design"></li>
                <li class="button"><a href="#" class="samen-groeien">SAMEN GROEIEN</a></li>
            </ul>        

        <h1 class="title">{item.title}</h1>
    </section>
{/each}

<style>
    .list {
        display: flex;
        justify-content: space-between; 
        list-style-type: none; 
        margin: 2em;
    }

    .logo {
        width: 13em;
        padding: 2em;
        align-self: flex-start;
    }

    .samen-groeien {
        text-decoration: none;
        color: white;
        border: 1px solid white;
        padding: 1em;
        align-self: flex-end;
        font-size: 1em;
    }

    .button {
        margin: 2em;
    }

    .title {
        text-align: center;
        font-size: 4em;;
        padding: 2em;
    }
</style>