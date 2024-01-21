<script setup lang="ts">
import { getTimeRecords } from "@/api/routes";
import { ref } from "vue";
import { string } from "vue-types";

defineOptions({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "TimeManage"
});
const resData = ref([{ date: string }]);

async function refreshCalendar() {
  const response = await getTimeRecords();
  resData.value = response.data;
}
</script>

<template>
  <el-button @click="refreshCalendar">刷新</el-button>
  <el-calendar>
    <template #date-cell="{ data }">
      <p :class="data.isSelected ? 'is-selected' : ''">
        {{ data.day.split("-").slice(1).join("/") }}
        {{ data.isSelected ? "✔️" : "" }}
      </p>
      <p>{{ resData.some(e => e.date === data.day) ? "🐸" : "" }}</p>
    </template>
  </el-calendar>
</template>

<style>
.is-selected {
  color: #1989fa;
}
</style>
