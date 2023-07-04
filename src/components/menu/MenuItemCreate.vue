<template>
    <div class="container">
        <p>Add a menu item</p>
        <input type="text" ref="name" placeholder="name" class="input-field">
        <input type="text" ref="desc" placeholder="description" class="input-field">
        <input type="text" ref="image" placeholder="image" class="input-field">
        <input type="number" ref="price" placeholder="price" class="input-field">
        <button @click="menu_info" class="save-button">SAVE</button>
        <p>{{ message }}</p>
    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
    data() {
        return {
            message: undefined
        }
    },
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

<style scoped>
.container {
    background-color: lightgray;
    padding: 20px;
}

.input-field {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 4px;
}

.save-button {
    background-color: pink;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

p {
    color: black;
}
</style>