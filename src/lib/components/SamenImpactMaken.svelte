<script>
  export let data;
</script>

{#each data.samenImpactMakens as item}
    <section class="content">     
        <h1 class="title">{item.title}</h1>

        <p class="impact-maken-over">{@html item.content.html}</p>

        <a href="#" class="ontdek-meer">ONTDEK MEER</a>
    </section>
{/each}

<style>
    .content {
        margin-top: 12em;
        margin-bottom: 16em;
        text-align: center;
    }

    .title {
        font-size: 2.5em;
    }

    .impact-maken-over {
        margin: 0 auto; 
        max-width: 40em;
        padding: 1em;
        margin-bottom: 3em;
    }

    .ontdek-meer {
        text-decoration: none;
        color: white;
        border: 1px solid white;
        padding: 1em;
        align-self: flex-end;
    }
</style>