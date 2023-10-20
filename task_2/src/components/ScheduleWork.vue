<template>
  <div>
    <h3 class="schedule__result__heading">График работы</h3>
    <p class="schedule__result__text">
      <span class="schedule__result__important">Сотрудник: </span>
      <span>{{ fullName }}</span>
    </p>
    <p class="schedule__result__text">
      <span class="schedule__result__important">Бригада: </span>
      <span>{{ worker.brigade }}</span>
    </p>
    <p class="schedule__result__text">
      <span class="schedule__result__important">Смена: </span>
      <span>{{ worker.shift }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'ScheduleWork',
  props: {
    worker: {
      type: Object,
      required: true,
    },
  },
  computed: {
    fullName() {
      return `${this.worker.lastName} ${this.worker.firstName} ${this.worker.patronymic || ''}`;
    },
  },
};
</script>

<style></style>
