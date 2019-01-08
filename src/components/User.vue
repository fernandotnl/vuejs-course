<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <p>User Name: {{name}}</p>
        <button @click="changeName"> Change name </button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail 
                    :name="name"
                    @nameWasChanged="name = $event"
                    :resetNameFromParent="resetName"
                    :userAge="age"
                    ></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit
                    :userAge="age"
                    @ageWasEdited="age = $event"
                    ></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data(){
            return {
                name: 'Fernando',
                age: 27
            }
        },
        methods: {
            changeName(){
                this.name = 'Bruna';//this.name === 'Fernando' ? 'Bruna': 'Fernando';
            },
            resetName(){
                this.name = 'Fernando (parent)';
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
