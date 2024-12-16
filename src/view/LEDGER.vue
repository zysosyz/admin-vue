<template>
  <div>总账</div>
</template>

<script setup lang="ts">
import http from "../utils/http";
import { ref, onMounted } from "vue";
const data = {
  dateEnd: "2023-06-30 12:00:00",
  dateStart: "2023-06-01 12:00:00",
};

onMounted(() => {
  http("ledger/searchLedgerByParam", "post", data).then((res) => {
    console.log(res);
  });
});
</script>

<style scoped></style>
