<template>
    <div>
       <input type="text" ref="name" placeholder="name">
       <input type="text" ref="desc" placeholder="desciption">
       <input type="text" ref="image" placeholder="image">
       <input type="number" ref="price" placeholder="price">
       <button @click="menu_info">SAVE</button>
       <p> {{this.message}} </p>
    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'
    export default {
        data() {
            return {
            message: undefined
            }
        },
       menu_info: function () {
        axios.request({
            url: 'https://foodie.bymoen.codes/api/menu',
            headers: {
                'x-api-key': `rnA2v1qeHqSIjeL98kXk`,
                'token' : cookies.get(`token`)
            },
            method : `POST`,
            data: {
                name: this.$ref[`name`].value,
                description: this.$ref[`desc`].value,
                image_url: this.$ref[`image`].value,
                price: this.$ref[`price`].value,
            }
        }).then(() => {
            this.message = `menu item created`
            this.$root.$emit
        }).catch((error) => {
            this.message = error
        })
       } ,
       mounted( ) {
        this.menu_info();
        this.$root.$on(`NewMenuItems` , this.menu_info);
       }
    }
</script>

<style scoped>

</style>