<script setup>
import {onMounted, ref} from "vue";
import {useUserStore} from "../../../stores/user";
import {useVuelidate} from '@vuelidate/core'
import {required, email} from '@vuelidate/validators'
import router from "../../../router";

import InputText from "../../../shared/ui/InputText/InputText.vue";
import Button from "../../../shared/ui/Button/Button.vue";
import {requestAuth} from "@/shared/api/auth";

const fields = ref({
    username: '',
    password: '',
});
const rules = {
    username: {required}, // Matches state.firstName
    password: {required}, // Matches state.lastName
}
const v$ = useVuelidate(rules, fields);
const store = useUserStore();

const getUserData = store.getUserData;

async function handleSubmit() {

    const isFormCorrect = await v$.value.$validate()
    if (!isFormCorrect) return

    const res = await requestAuth(fields.value)
    console.log(res)
}


onMounted(() => {
    fields.value.username = 'kminchelle'
    fields.value.password = '0lelplR'
})


</script>

<template>
    <div class="auth">
        <form class="form">
            <div class="form__inputs">
                <InputText v-model="fields.username" :label="'Введите логин'" :errors="v$.username.$errors"/>
                <InputText v-model="fields.password" :label="'Введите пароль'" :errors="v$.password.$errors"/>
                <Button :label="'Войти'" @press="handleSubmit"/>
            </div>
        </form>
    </div>
</template>
