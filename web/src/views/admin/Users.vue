<template>
  <div class="about">
    <h4>List of all users</h4>
    <app-spinner v-if="!users.length"></app-spinner>
    <b-list-group v-else>
        <b-list-group-item v-for="user in users" :key="user.email">
            {{ user.fname }} {{ user.lname }} | {{ user.email }}
        </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import api from '@/plugins/api.js';

export default {
    name: 'Users',

    data() {
        return {
            users: [],
        };
    },

    created() {
        // example of calling api directly rather than dispatching an action
        api.get('/admin/users')
            .then((resp) => {
                this.users = resp;
            })
            .catch((error) => {
                console.log('bad stuff: ', error);
            });
    }
};
</script>

