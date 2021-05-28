<template>
  <b-container fluid>
    <h1>Upload page</h1>
    <b-container>
      <div v-if="loadingData">
        Please wait while data is loaded ...
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
                <b-button @click="showAddNewEventGroup = !showAddNewEventGroup" variant="info">Create new</b-button>
                <b-modal v-model="showAddNewEventGroup" size="md" title="Add new event group" centered header-bg-variant="light" ok-title="Add" ok-variant="info">
                  <add-new-event-group-modal :eventGroupApi="eventGroupApi"></add-new-event-group-modal>
                </b-modal>
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
import { EventGroupDTO } from 'api-axios/model';
import AddNewEventGroupModal from '@/components/dialogs/EventGroup/AddNewEventGroup.vue'
import ServiceHelper from '@/helpers/ServiceHelper';

export default Vue.extend({
  data() {
    return {
      // Dialog booleans.
      showAddNewEventGroup: false,
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

    /**
     * Execute on selected event group.
     */
    onSelectedEventGroupChange() {
      this.selectedEventGroup = this.listOfEventGroups.find(eg => eg.id === this.selectedEventGroup.id) || {} as EventGroupDTO;
    }
  },
  components: {
    'add-new-event-group-modal': AddNewEventGroupModal,
  }
});
</script>
