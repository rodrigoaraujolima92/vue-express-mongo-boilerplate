<template>
<div>
  <v-button @on-click="$store.commit(`feeds/${TOGGLE_POPUP_NEW_FEED}`)">
    <font-awesome-icon icon="plus" />
    Add Feed
  </v-button>
  <div class="sm-good-table">
    <vue-good-table :total-rows="$store.state.feeds.data.total" :rows="$store.state.feeds.data.records" :columns="$store.state.feeds.data.columns" :pagination-options="{
      enabled: true, 
      mode: 'pages',
      perPage: $store.state.feeds.data.serverParams.limit
    }" mode="remote" @on-page-change="$store.dispatch(`feeds/${ON_PAGE_CHANGE}`, $event)" @on-per-page-change="$store.dispatch(`feeds/${ON_PER_PAGE_CHANGE}`, $event)" />
  </div>
  <v-popup v-model="$store.state.feeds.v_popup__state">
    <form class="sm-form" @submit.prevent="$store.dispatch(`feeds/${ADD_NEW_FEED}`)">
      <h2 class="sm-title">Feed</h2>
      <div class="sm-content">
        <v-input v-model="$store.state.feeds.v_popup__feed_name">
          <template slot="label">
            Name
          </template>
        </v-input>
        <div class="sm-btn__wrapper sm-btn__wrapper--size-m">
          <button class="sm-btn" type="submit">Save</button>
        </div>
      </div>
    </form>
  </v-popup>
</div>
</template>

<script>
import {
  TOGGLE_POPUP_NEW_FEED
} from './../../store/mutationsTypes';
import {
  ADD_NEW_FEED,
  ON_PAGE_CHANGE,
  ON_PER_PAGE_CHANGE
} from './../../store/actionsTypes';

import VButton from '@/ButtonElement.vue';
import VInput from '@/VInput.vue';
import VPopup from '@/VPopup.vue';
import {
  VueGoodTable
} from 'vue-good-table';
import 'vue-good-table/dist/vue-good-table.css';

export default {
  name: 'Feeds',
  components: {
    VButton,
    VInput,
    VPopup,
    VueGoodTable,
  },
  data: function () {
    return {
      TOGGLE_POPUP_NEW_FEED,
      ADD_NEW_FEED,
      ON_PAGE_CHANGE,
      ON_PER_PAGE_CHANGE
    }
  },

  methods: {
    handleSubmit: function () {
      this.v_popup__state = !this.v_popup__state;
    }
  }
}
</script>

<style lang="scss">
.sm-content {
  .sm-btn__wrapper {
    margin-left: 1rem;
  }
}
.sm-good-table{
  margin-top: 2rem;
}
</style>
