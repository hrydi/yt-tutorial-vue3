<script setup>
import Modal from '@/components/Modal.vue';

import { ref } from 'vue';

const modal = ref(null);

function onHide(ev) {
  console.log("Modal Hide ", ev);
}

function onShow(ev) {
  console.log("Modal Show ", ev);
}

</script>
<template>
  <h1>Home page</h1>
  <div class="row">
    <div class="col-12">
      <div class="panel panel-default">
        <div class="panel-body">
          <button class="btn btn-success" @click="modal.open()">
            Show Modal
          </button>
        </div>
      </div>
    </div>
  </div>

  <Modal ref="modal" @on-hide="onHide" @on-show="onShow">
    <template #title>Helloo My Modal</template>
    <template #footer>
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </template>
    <p>Modal body text goes here.</p>
  </Modal>
</template>
