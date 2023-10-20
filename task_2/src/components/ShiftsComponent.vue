<template>
  <div class="schedule__appointment__block">
    <label class="schedule__appointment__heading">Выберите график</label>
    <BaseSelect
      @update:modelValue="changeBrigade"
      v-model="selectedBrigadeId"
      :isActive="true"
      label="Выберите бригаду"
      name="brigade"
      primary-key="idBrigade"
      :options="brigades" />
    <label
      v-show="filteredShifts.length > 0"
      class="schedule__label"
      >Выберите смену</label
    >
    <div class="schedule__appointment__shifts">
      <div
        v-for="shift in filteredShifts"
        :key="shift.idShift">
        <input
          v-model="selectShiftId"
          type="radio"
          class="schedule__shift"
          v-bind:value="shift.idShift"
          name="shift"
          :id="`shift_${shift.idShift}`" />
        <label
          class="schedule__label"
          :for="`shift_${shift.idShift}`"
          :title="'время работы с ' + shift.workStart + ' до ' + shift.workFinish">
          {{ shift.name }}
        </label>
      </div>
    </div>
    <input
      class="schedule__btn__save"
      :disabled="selectShiftId == null"
      type="button"
      value="Сохранить"
      @click="saveAppointment" />
  </div>
</template>

<script>
import BaseSelect from '@/components/BaseSelect.vue';

export default {
  components: { BaseSelect },
  props: { brigades: Array, shifts: Array },
  data() {
    return {
      selectedBrigadeId: null,
      selectShiftId: null,
    };
  },
  computed: {
    filteredShifts() {
      if (!this.selectedBrigadeId) {
        return 0;
      }
      return this.shifts.filter((shift) => shift.idBrigade == this.selectedBrigadeId);
    },
  },
  methods: {
    changeBrigade() {
      this.selectShiftId = null;
    },
    saveAppointment() {
      if (!this.selectShiftId) {
        this.selectShiftId = null;
        return;
      }
      const shitId = this.selectShiftId;
      this.$emit('saveAppointment', shitId);
    },
  },
};
</script>
