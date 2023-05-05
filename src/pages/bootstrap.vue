<script setup>
import { Tooltip, Toast } from 'bootstrap';

onMounted(() => {
  const toastTrigger = document.getElementById('liveToastBtn');
  const toastLiveExample = document.getElementById('liveToast');
  if (toastTrigger) {
    toastTrigger.addEventListener('click', () => {
      const toast = new Toast(toastLiveExample);
      toast.show();
    });
  }
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]',
  );
  const tooltipList = [...tooltipTriggerList].map(
    tooltipTriggerEl => new Tooltip(tooltipTriggerEl),
  );
});
</script>
<template>
  <!-- toast -->
  <button type="button" class="btn btn-primary" id="liveToastBtn">
    Show live toast
  </button>
  <div class="toast-container position-fixed end-0 bottom-0 p-3">
    <div
      id="liveToast"
      class="toast"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="toast-header">
        <img
          src="https://picsum.photos/300/200/?random=10"
          class="me-2 rounded"
          alt="..."
        />
        <strong class="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
      <div class="toast-body">Hello, world! This is a toast message.</div>
    </div>
  </div>
  <!-- tooltip -->
  <button
    type="button"
    class="btn btn-secondary"
    data-bs-toggle="tooltip"
    data-bs-placement="top"
    data-bs-custom-class="custom-tooltip"
    data-bs-title="This top tooltip is themed via CSS variables."
  >
    Custom tooltip
  </button>
</template>
<style lang="scss" scoped>
h1 {
  font-size: 24px;
}
</style>
