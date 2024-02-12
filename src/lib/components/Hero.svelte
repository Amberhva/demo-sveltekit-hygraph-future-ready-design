<script>
  export let data;
</script>

{#each data.heroes as item}
    <section class="hero">
        <img src={item.image.url} alt="Logo Future Ready Design">
        <h2 class="title">{item.title}</h2>
    </section>
{/each}

<style>
    
</style>