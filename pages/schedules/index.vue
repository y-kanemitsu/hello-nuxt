<template>
    <section class="section">
        <div class="columns is-mobile">
            <full-calendar />
        </div>
        <br>
        <br>
        <button>
            <nuxt-link to="/schedules/new">
                Add Item
            </nuxt-link>
        </button>
    </section>
</template>

<script>
export default {
    name: 'Schedule'
}
</script>