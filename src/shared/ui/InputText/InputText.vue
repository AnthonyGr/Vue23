<script setup>
//PROPS
const props = defineProps({
    modelValue: String,
    label: String,
    errors: [Array, String]
})
//EMITS
const emits = defineEmits(['update:modelValue'])


</script>

<template>
    <div class="default-input">
        <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
               class="default-input__input error" type="text"/>
        <label class="default-input__label">{{ label }}</label>
        <div v-if="errors" class="default-input__error">{{ Array.isArray(errors) ? errors[0]?.$message : errors }}</div>
    </div>
</template>