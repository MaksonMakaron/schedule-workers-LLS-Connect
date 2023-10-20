<template>
  <div class="container">
    <section class="schedule__block">
      <h1 class="schedule__heading">График работы сотрудников ООО «Коннект»</h1>
      <form
        @submit.prevent
        class="schedule__form">
        <BaseSelect
          @update:modelValue="changeCity"
          v-model="selectedCityId"
          :isActive="true"
          label="Выберите город"
          name="city"
          primary-key="idCity"
          :options="cities" />
        <BaseSelect
          @update:modelValue="changeWorkshop"
          v-model="selectedWorkshopId"
          :isActive="selectedCityId != null"
          label="Выберите цех"
          name="workshop"
          primary-key="idWorkshop"
          :options="filteredWorkshops" />
        <BaseSelect
          v-model="selectedWorkerId"
          :isActive="selectedWorkshopId != null"
          label="Выберите сотрудника"
          name="worker"
          primary-key="idWorker"
          :options="filteredWorkers" />
        <div>
          <div class="schedule__appointment__block">
            <ScheduleWork
              v-if="isAppoinmentWorker"
              :worker="getWorkerSchedule"
              :class="['schedule__result schedule__animate', isAppoinmentWorker ? 'schedule__animate__show' : 'schedule__animate__hidden']" />
            <ShiftsComponent
              v-else-if="isNotAppoinmentWorker"
              :brigades="brigades"
              :shifts="shifts"
              :class="['schedule__appointment schedule__animate', isNotAppoinmentWorker ? 'schedule__animate__show' : 'schedule__animate__hidden']"
              @saveAppointment="saveAppointmentCookie" />
          </div>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import BaseSelect from '@/components/BaseSelect.vue';
import ShiftsComponent from '@/components/ShiftsComponent.vue';
import ScheduleWork from '@/components/ScheduleWork.vue';
import { cities, workshops, workers, brigades, shifts } from '@/assets/data.js';

export default {
  components: {
    BaseSelect,
    ShiftsComponent,
    ScheduleWork,
  },
  data() {
    return {
      selectedCityId: null,
      selectedWorkshopId: null,
      selectedWorkerId: null,
      cities,
      workshops,
      workers,
      brigades,
      shifts,
    };
  },
  mounted() {
    if (this.$cookies.isKey('LLC_Connect')) {
      this.workers = JSON.parse(this.$cookies.get('LLC_Connect'));
    }
  },
  computed: {
    getWorkerSchedule() {
      if (!this.selectedWorkerId) {
        return;
      }
      const shift = this.shifts.find((p) => p.idShift == this.getCurrentWorker.idShift);
      const brigade = this.brigades.find((p) => p.idBrigade == shift.idBrigade);
      const workerSchedule = {
        lastName: this.getCurrentWorker.lastName,
        firstName: this.getCurrentWorker.firstName,
        patronymic: this.getCurrentWorker.patronymic,
        brigade: brigade.name,
        shift: `${shift.name} (с ${shift.workStart.substring(0, 5)} до ${shift.workFinish.substring(0, 5)})`,
      };

      return workerSchedule;
    },
    getCurrentWorker() {
      return this.workers.find((p) => p.idWorker == this.selectedWorkerId);
    },
    filteredWorkshops() {
      if (!this.selectedCityId) {
        return [];
      }
      return this.workshops.filter((workshop) => workshop.idCity == this.selectedCityId);
    },
    filteredWorkers() {
      if (!this.selectedWorkshopId) {
        return [];
      }
      return this.workers.filter((worker) => worker.idWorkshop == this.selectedWorkshopId);
    },
    isAppoinmentWorker() {
      return Boolean(this.selectedWorkerId && this.getCurrentWorker.idShift);
    },
    isNotAppoinmentWorker() {
      return Boolean(this.selectedWorkerId && !this.getCurrentWorker.idShift);
    },
  },
  methods: {
    changeCity() {
      this.selectedWorkerId = null;
    },
    changeWorkshop() {
      this.selectedWorkerId = null;
    },

    saveAppointmentCookie(value) {
      this.getCurrentWorker.idShift = value;
      this.selectedCityId = null;
      this.selectedWorkshopId = null;
      this.selectedWorkerId = null;
      this.$cookies.set('LLC_Connect', JSON.stringify(this.workers), '1h');
    },
  },
};
</script>
