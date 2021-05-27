<template>
  <b-container fluid>
    <h1>Upload page</h1>
    <b-container>
      <div v-if="loadingData">
        Please wait while data is loaded ...
        <b-spinner type="grow" label="Spinning"></b-spinner>
      </div>
      <div v-if="!loadingData">
        <b-row>
          <b-col sm="4">
            <b-form-group id="event-group-selection" label="Event group:" label-for="event-group-select">
              <b-form-select id="event-group-select" :options="listOfEventGroups" v-model="selectedEventGroup.id" text-field="name" value-field="id" @change="onSelectedEventGroupChange" v-if="!loadingEventGroups"></b-form-select>
            </b-form-group>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </b-container>
</template>

<script lang="ts">
import Vue from "vue";
import store from "@/store";
import { EventGroupApi } from "@/../api-axios/api";
import { EventGroupDTO } from 'api-axios/model';
import ServiceHelper from '@/service/ServiceHelper';

export default Vue.extend({
  data() {
    return {
      // Parameters & variables.
      loadingEventGroups: true,
      errorMessage: "",
      selectedEventGroup: {} as EventGroupDTO,

      // APIs.
      eventGroupApi: {} as EventGroupApi,

      // Lists of entities.
      listOfEventGroups: [] as Array<EventGroupDTO>
    }
  },

  created() {
    // APIs.
    this.eventGroupApi = new EventGroupApi(store.getters.apiConfiguration.getApiConfiguration);

    // Load event groups.
    this.loadEventGroups(true);
  },

  computed: {
    loadingData: {
      get(): boolean {
        return this.loadingEventGroups;
      },
    }
  },

  methods: {
    /**
     * Load event groups.
     * @param enabled Is enabled.
     */
    async loadEventGroups(enabled: boolean) {
      try {
        console.log("entering");

        this.loadingEventGroups = true;
        const response = await this.eventGroupApi.apiEventGroupGetEventGroupsGet(enabled);
        this.loadingEventGroups = false;
        console.log("have response.");

        // Filter event groups..
        if (ServiceHelper.CheckResponseStatusCode(response.status)) {
          this.listOfEventGroups = response.data;
        } else {
          const msg = `Failed response with status ${response.status}: ${response.data}.`;
          throw new Error(msg);
        }
      } catch (error) {
        console.log("error");
        this.loadingEventGroups = false;
        const errTitle = "An error has occurred while loading event groups.";
        const errorDetails = ServiceHelper.GetErrorMessageFromApiError(error);
        this.errorMessage = errorDetails.Message || "Unexpected error occured.";
        this.$bvToast.toast(this.errorMessage, {
          title: errTitle,
          variant: 'danger',
          solid: true,
          autoHideDelay: 5000
        })
      }
    },

    /**
     * Execute on selected event group.
     */
    onSelectedEventGroupChange() {
      this.selectedEventGroup = this.listOfEventGroups.find(eg => eg.id === this.selectedEventGroup.id) || {} as EventGroupDTO;
    }
  }
});
</script>
