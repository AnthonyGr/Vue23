import {ref, computed} from 'vue'
import {defineStore} from 'pinia'

export const useUserStore = defineStore('user', () => {
    const userData = ref(0);
    const userPosts = ref(0);

    const getUserData = computed(() => userData)
    const getUserPosts = computed(() => userPosts)


    return {userData, getUserData, getUserPosts}
})
