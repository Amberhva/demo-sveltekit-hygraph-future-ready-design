<script>
  export let data;
</script>

{#each data.gerichtOpLangdurigSuccess as item}
    <section class="content">     
        <div class="container-left">
            <h1 class="title">{item.title}</h1>
            <p class="impact-maken-over">{@html item.content.html}</p>
        </div>  

        <div class="container-right">
            <p class="impact-maken-list">{@html item.list}</p>
        </div>
    </section>
{/each}

<style>
    .content {
    margin-top: 20em;
    margin-bottom: 12em;
    display: flex;
    justify-content: space-between;
    text-align: center;
    padding: 2em;
}

.container-left,
.container-right {
    flex: 1;
    max-width: 40em;
    text-align: left;
}

    .title {
    font-size: 2em;
}

.impact-maken-over,
.impact-maken-list {
    margin: 0 auto; 
    margin-bottom: 3em;
}
</style>