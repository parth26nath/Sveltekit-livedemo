<script lang="ts">
    export let data;
</script>

<div>
  {#each data.names as { name }}
    <div class="font-semibold">{names}</div>
  {/each}
</div>