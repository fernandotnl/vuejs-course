<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{reverseName()}}</p>
        <button @click="resetName"> Reset name </button>
    </div>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                required: true
            }
        },
        methods: {
            reverseName(){
                return this.name.split("").reverse().join("");
            },
            resetName(){
                this.name = 'Fernando';
            }
        }
    }
</script>

<style scoped>
    .component div {
        background-color: lightcoral;
    }
</style>
