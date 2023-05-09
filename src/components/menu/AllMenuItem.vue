<template>
    <div>
        <single-menu-item v-for="(item , i) in items" :key="i"></single-menu-item>
    </div>
</template>

<script>
import axios from 'axios'
import SingleMenuItem from '@/components/SingleMenuItem.vue'
import SingleMenuItem from '@/components/menu/SingleMenuItem.vue'
    export default {
        components: {
            SingleMenuItem,
        },
        data() {
            return {
                items: undefined
            }
        },
        methods: {
            get_menu: function( ) {
                axios.request({
                    url: 'https://foodie.bymoen.codes/api/menu',
                    headers: {
                        'x-api-key': `rnA2v1qeHqSIjeL98kXk`
                    },
                    params: {
                        restaurant_id: cookies.get(`restaurant_id`),
                    }
                }).then((response) => {
                    this.items = response[`data`]
                }).catch((error) => {
                    error
                })
            }
        }
        
    }
</script>

<style scoped>

</style>