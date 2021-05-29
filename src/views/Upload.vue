<template>
  <b-container fluid>
    <h1>Upload page</h1>
    <b-container>
      <div v-if="loadingData">
        Please wait while data is loading ...
        <b-spinner type="grow" label="Spinning"></b-spinner>
      </div>
      <div v-if="!loadingData">
        <div v-if="allListsEmpty">
          Sorry, I was unable to obtain data. Something seems to be wrong. <b-icon-emoji-frown></b-icon-emoji-frown>
        </div>
        <div v-else>
          <!-- Event group. -->
          <b-row>
            <b-col>
              <b-form inline>
                <label class="mr-sm-2" for="event-group-select">Select event group:</label>
                <b-form-select id="event-group-select" class="mb-2 mr-sm-2 mb-sm-0" :options="listOfEventGroups" v-model="selectedEventGroup.id" text-field="name" value-field="id" @change="onSelectedEventGroupChange" v-if="!loadingEventGroups"></b-form-select>
                <label class="mr-sm-2" for="create-event-group-button">or</label>
                <b-button @click="addNewEventGroupModalVisibility = !addNewEventGroupModalVisibility" variant="info">Create new</b-button>
                <add-new-event-group-modal :modalVisible.sync="addNewEventGroupModalVisibility" :eventGroupApi="eventGroupApi" :newEventGroup="newEventGroup" @toggle-visibility="toggleAddNewEventGroupVisibility" @load-event-groups="loadEventGroups"></add-new-event-group-modal>
              </b-form>
            </b-col>
          </b-row>

          <!-- Scoring -->
        </div>
      </div>
    </b-container>
  </b-container>
</template>

<script lang="ts">
import Vue from "vue";
import store from "@/store";
import { EventGroupApi } from "@/../api-axios/api";
import { AddNewEventGroupDTO, EventGroupDTO } from 'api-axios/model';
import AddNewEventGroupModal from '@/components/modals/EventGroup/AddNewEventGroup.vue';
import ServiceHelper from '@/helpers/ServiceHelper';

export default Vue.extend({
  data() {
    return {
      // Modal booleans.
      addNewEventGroupModalVisibility: false,
      // Parameters & variables.
      loadingEventGroups: true,
      errorMessage: "",
      selectedEventGroup: {} as EventGroupDTO,
      newEventGroup: {} as AddNewEventGroupDTO,

      // APIs.
      eventGroupApi: {} as EventGroupApi,

      // Lists of entities.
      listOfEventGroups: [] as Array<EventGroupDTO>
    }
  },

  components: {
    'add-new-event-group-modal': AddNewEventGroupModal,
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
    },
    allListsEmpty: {
      get(): boolean {
        return ServiceHelper.IsNullOrEmpty(this.listOfEventGroups)
      }
    }
  },

  methods: {
    /**
     * Load event groups.
     * @param enabled Is enabled.
     */
    async loadEventGroups(enabled: boolean) {
      try {
        this.loadingEventGroups = true;
        const response = await this.eventGroupApi.apiEventGroupGetEventGroupsGet(enabled);
        this.loadingEventGroups = false;

        // Filter event groups..
        if (ServiceHelper.CheckResponseStatusCode(response.status)) {
          this.listOfEventGroups = response.data;
        } else {
          const msg = `Failed response with status ${response.status}: ${response.data}.`;
          throw new Error(msg);
        }
      } catch (error) {
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

    async toggleAddNewEventGroupVisibility(visibility: boolean) {
      this.addNewEventGroupModalVisibility = visibility;
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
