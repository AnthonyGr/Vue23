<script setup>
import {onMounted, ref} from "vue";
import {useUserStore} from "../../stores/user";
import {requestUserPosts} from "@/components/UserInfo/api/userInfo";
import { useQuery } from "vue-query";

const store = useUserStore();

const userPosts = ref(0)

// function usePostsQuery() {
//     return useQuery("posts", requestUserPosts);
// }
// const { isLoading, isError, data, error, isFetching } = usePostsQuery();

 onMounted(async () => {
   await requestUserPosts();
   console.log(15)
});



</script>

<template>
    <div class="user-info">
        <h1>Hello</h1>
        <br>
        <p v-if="isLoading">loading...</p>
        <div v-else-if="data">
            <ul>
                <li v-for="post in data" :key="post.id">
                    <p><b>{{ post.title }}</b></p>
                    <p>{{ post.body }}</p>
                    <br>
                </li>

            </ul>
        </div>
    </div>
</template>
