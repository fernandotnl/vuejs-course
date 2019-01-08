<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{reverseName()}}</p>
        <p>User Age: {{userAge}}</p>
        <button @click="resetName"> Reset name </button>
        <button @click="resetNameFromParent()"> Reset name parent </button>
    </div>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                required: true
            },
            resetNameFromParent: Function,
            userAge: Number
        },
        methods: {
            reverseName(){
                return this.name.split("").reverse().join("");
            },
            resetName(){
                this.name = 'Fernando';
                this.$emit('nameWasChanged', this.name);
            }
        }
    }
</script>

<style scoped>
    .component div {
        background-color: lightcoral;
    }
</style>
