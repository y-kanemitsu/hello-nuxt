<template>
    <div>
        <h1>
            Items
        </h1>
        <table border="1">
            <thead>
                <tr>
                    <th>
                        id
                    </th>
                    <th>
                        name
                    </th>
                    <th>
                        price
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.id">
                    <td>
                        {{ item.id }}
                    </td>
                    <td>
                        <nuxt-link :to="'/items/' + item.id">
                            {{ item.name }}
                        </nuxt-link>
                    </td>
                    <td>
                        {{ item.price }}
                    </td>
                </tr>
            </tbody>
        </table>
        <br>
        <br>
        <button>
            <router-link to="/items/new">
                Add Item
            </router-link>
        </button>
    </div>
</template>

<script>
// import axios from 'axios' //99-api-mockを使う場合こちら
import itemsData from '~/assets/json/items.json'

export default {
    data: function() {
        return {
            items: itemsData.items
        };
    },
    // asyncData: async function () { //99-api-mockを使う場合こちら
    //     const response = await axios.get("http://localhost:3001/items")
    //     return { items: response.data }
    // }
};
</script>