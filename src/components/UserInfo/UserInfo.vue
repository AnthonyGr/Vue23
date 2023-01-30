<script setup>
import {ref} from "vue";
import {useUserStore} from "../../stores/user";
import { useQuery } from "vue-query";

const store = useUserStore();
const getUserData = store.getUserData;
const getUserPosts = store.getUserPosts;

const userPosts = ref(0)

function usePostsQuery() {
    return useQuery("posts", store.requestUserPosts);
}

const { isLoading } = usePostsQuery();



</script>

<template>
    <div class="user-info">
        <h1>Hello: {{getUserData.firstName + ' ' + getUserData.lastName}}</h1>
        <br>
        <p v-if="isLoading">loading...</p>
        <div v-else-if="store.getUserPosts">
            <ul>
                <li v-for="post in getUserPosts">{{post.title}}</li>
            </ul>
        </div>
    </div>
</template>
