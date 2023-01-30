import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import ObjectToFormData from "../shared/helpers/ObjectToFormData";

export const useUserStore = defineStore('user', () => {
    const userData = ref(0);
    const userPosts = ref(0);

    const getUserData = computed(() => userData)
    const getUserPosts = computed(() => userPosts)

    async function requestUserAuth(fields) {
        const body = ObjectToFormData(fields)
        const res = await fetch('https://dummyjson.com/auth/login', {method: 'POST', body}).then(res => res.json());
        if (res.id) {
            userData.value = res;
        } else {
            alert(res.message)
        }
    }

    async function requestUserPosts() {
        const res = await fetch('https://dummyjson.com/users/5/posts').then(res => res.json());
        if (res.posts) {
            userPosts.value = res.posts;
        } else {
            alert(res.message)
        }
    }

    return {userData, requestUserAuth, requestUserPosts, getUserData, getUserPosts}
})
