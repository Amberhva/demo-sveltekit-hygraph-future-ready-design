<script>
    export let data;
    import { onMount } from "svelte";

    // Importeer de componenten uit het componenten map
    import Header from "../lib/components/Header.svelte";
    import SamenImpactMaken from "../lib/components/SamenImpactMaken.svelte";
    import GerichtOpLangdurigSucces from "../lib/components/GerichtOpLangdurigSucces.svelte"

    onMount(() => {});
</script>

<!-- Voeg de componenten toe -->
<Header {data}/>
<SamenImpactMaken {data} />
<GerichtOpLangdurigSucces {data}/>