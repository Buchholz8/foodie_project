<template>
    <div>
        <input type="text" ref="name" placeholder="name">
        <input type="text" ref="desc" placeholder="desciption">
        <input type="text" ref="image" placeholder="image">
        <input type="number" ref="price" placeholder="price">
        <button @click="menu_info">SAVE</button>
        <p> {{ this.message }} </p>
    </div>
</template>

<script>
//import what is needed
import axios from "axios";
import cookies from "vue-cookies";
export default {
    //i create a data area
    data() {
        return {
            message: undefined
        }
    },
    //the function that handles the api request
    methods: {
        menu_info: function () {
            axios
                .request({
                    url: 'http://127.0.0.1:5000/api/menu',
                    method: "POST",
                    data: {
                        name: this.$refs[`name`].value,
                        price: this.$refs[`price`].value,
                        description: this.$refs[`desc`].value,
                        img_url: this.$refs[`image`].value,
                        restaurant_id: cookies.get('restaurant_id')
                    }
                }).then((response) => {
                    this.message = `menu item created`;
                    this.$root.$emit(response);
                }).catch((error) => {
                    error
                });
        },
    },
    mounted() {
        this.$root.$on(`NewMenuItems`, this.menu_info);
    }
}
</script>

<style scoped></style>