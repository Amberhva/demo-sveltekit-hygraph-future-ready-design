<script>
    export let data;
    import { onMount } from "svelte";

    import Hero from "../lib/components/Hero.svelte";

    onMount(() => {});
</script>

<!-- Voeg de componenten toe -->
<Hero {data}/>

