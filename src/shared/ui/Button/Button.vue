<script setup>
//PROPS
const props = defineProps({
    label: String,
})
//EMITS
const emits = defineEmits(['press'])


</script>

<template>
    <button class="btn" @click.prevent="emits('press')">{{ label }}</button>
</template>


