<template>
  <label
    :for="name"
    class="schedule__label"
    >{{ label }}</label
  >
  <select
    :value="modelValue"
    :id="name"
    :disabled="!isActive"
    @change="$emit('update:modelValue', $event.target.value)"
    :class="['schedule__select', isActive ? 'schedule__select__active' : '']">
    <option
      v-for="option in options"
      :key="option[primaryKey]"
      :value="option[primaryKey]">
      {{ option.name || `${option.lastName} ${option.firstName} ${option.patronymic}` }}
    </option>
  </select>
</template>

<script>
export default {
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: String,
    },
    primaryKey: {
      type: String,
    },
    selectedOption: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
    isActive: {
      type: Boolean,
    },
    label: {
      type: String,
    },
    name: {
      type: String,
    },
  },
};
</script>
