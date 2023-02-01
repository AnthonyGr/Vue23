import {apiInstanse} from "@/shared/api/base";

export const requestUserPosts = async () => {
        await apiInstanse.get('users/5/postsgg')
            .then(res => res.data.posts)
            .catch(e => console.log(e))
}