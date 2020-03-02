<template>
    <div>
        <h1>
            Items Id
        </h1>
        <ul>
            <li>
                id: {{ item.id }}
            </li>
            <li>
                name: {{ item.name }}
            </li>
            <li>
                price: {{ item.price }}
            </li>
            <li>
                description: {{ item.description }}
            </li>
        </ul>
    </div>
</template>

<script>
// import axios from 'axios'
import itemsData from '~/assets/json/items.json'


export default {
    data: function() {
        return {
            item: itemsData.item
        };
    },
    // asyncData: async function (context) {
    //     const response = await axios.get(`http://localhost:3001/items/${context.params.id}`)
    //     return { item: response.data }
    // }
};
</script>