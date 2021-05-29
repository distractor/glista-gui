<template>
  <b-modal :visible.sync="modalVisible" size="md" title="Add new event group" centered header-bg-variant="light" ok-title="Add" ok-variant="info" @hide="hideModal()">
    <b-container fluid>
      <b-form-group>
        <b-row>
          <b-col>
            <b-form inline>
              <label class="mr-sm-2" for="event-group-select">Name:</label>
              <b-form-input id="event-group-name" class="mb-2 mr-sm-2 mb-sm-0" placeholder="2021 SLO league" v-model="newEventGroup.name"></b-form-input>
            </b-form>
          </b-col>
        </b-row>
      </b-form-group>
      <div v-if="loadingScorings">
        Please wait while data is loading ...
        <b-form-group>
          <b-spinner type="grow" label="Spinning"></b-spinner>
        </b-form-group>
      </div>
      <div v-else>
        <b-form-group>
          <b-row>
            <b-col>
              <b-form inline>
                <label class="mr-sm-2" for="scoring-select">Select scoring:</label>
                <b-form-select id="scoring-selector" class="mb-2 mr-sm-2 mb-sm-0" :options="listOfScorings" v-model="newEventGroup.scoringId" text-field="name" value-field="id" v-if="!loadingScorings"></b-form-select>
              </b-form>
            </b-col>
          </b-row>
        </b-form-group>
      </div>
    </b-container>
    <template #modal-footer>
      <b-form inline>
        <b-button variant="secondary" class="mb-2 mr-sm-2 mb-sm-0" @click="hideModal()">Cancel</b-button>
        <b-button variant="info" class="mb-2 mr-sm-2 mb-sm-0" @click="addNewEventGroup()" v-if="!addingNewEventGroup && !eventGroupAdded">Add</b-button>
        <b-spinner type="grow" label="Spinning" variant="info" v-if="addingNewEventGroup && !eventGroupAdded"></b-spinner>
        <b-button variant="info" class="mb-2 mr-sm-2 mb-sm-0" @click="closeModal()" v-if="!addingNewEventGroup && eventGroupAdded">Close</b-button>
      </b-form>
    </template>
  </b-modal>
</template>

<script lang="ts">
import Vue from "vue";
import store from "@/store";
import { EventGroupApi, ScoringApi } from "@/../api-axios/api";
import { AddNewEventGroupDTO, ScoringDTO } from "api-axios/model";
import ServiceHelper from "@/helpers/ServiceHelper";

export default Vue.extend({
  name: "AddNewEventGroupModal",
  data() {
    return {
      // Variables.
      loadingScorings: true,
      addingNewEventGroup: false,
      eventGroupAdded: false,
      errorMessage: "",

      // Lists.
      listOfScorings: [] as Array<ScoringDTO>,
      // APIs.
      scoringApi: {} as ScoringApi,
    }
  },

  props: {
    // Variables.
    modalVisible: Boolean,
    newEventGroup: {
      type: Object as () => AddNewEventGroupDTO,
    },

    // APIs.
    eventGroupApi: EventGroupApi,
  },

  created() {
    // APIs.
    this.scoringApi = new ScoringApi(store.getters.apiConfiguration.getApiConfiguration);

    // Load event groups.
    this.loadScorings(true);
  },

  methods: {
    /**
     * Close modal and reload event groups.
     */
    closeModal() {
      this.hideModal();
      this.$emit("load-event-groups");
    },

    /**
     * Execute on hide modal.
     */
    hideModal() {
      this.$emit("toggle-visibility", false);
    },

    /**
     * Loads scorings.
     * 
     * @param enabled Is enabled.
     */
    async loadScorings(enabled: boolean) {
      try {
        this.loadingScorings = true;
        const response = await this.scoringApi.apiScoringGetScoringsGet(enabled);
        this.loadingScorings = false;

        // Filter event groups..
        if (ServiceHelper.CheckResponseStatusCode(response.status)) {
          this.listOfScorings = response.data;
        } else {
          const msg = `Failed response with status ${response.status}: ${response.data}.`;
          throw new Error(msg);
        }
      } catch (error) {
        this.loadingScorings = false;
        const errTitle = "An error has occurred while loading scorings.";
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

    async addNewEventGroup() {
      // Validate all fields.
      // this.$v.$touch();
      // Invalid, becomes true when a validations return false.
      // const isValid = !this.$v.$invalid;
      // if (!isValid) {
      //   this.errorMessage = "Check input fields and fill with valid values.";
      //   this.$toast.add({ severity: "error", summary: "Fill form correctly", detail: this.errorMessage, life: 3000 });
      //   return;
      // } else {
      //   this.errorMessage = "";
      // }

      // Go to API endpoint.
      try {
        this.addingNewEventGroup = true;
        const response = await this.eventGroupApi.apiEventGroupPost(this.newEventGroup);
        this.addingNewEventGroup = false;

        if (ServiceHelper.CheckResponseStatusCode(response.status)) {
          this.eventGroupAdded = true;
          const insertedEventGroup = response.data;
          this.$bvToast.toast(`Event group '${insertedEventGroup.name}' successfully added.`, {
            title: "Event group added.",
            variant: 'success',
            solid: true,
            autoHideDelay: 5000
          })
          this.errorMessage = "";
        } else {
          const errTitle = `Failed response with status ${response.status}: ${response.data}`;
          throw new Error(errTitle);
        }
      } catch (error) {
        this.eventGroupAdded = false;
        this.addingNewEventGroup = false;
        const errTitle = "An error has occurred while adding new event group.";
        const errorDetails = ServiceHelper.GetErrorMessageFromApiError(error);
        this.errorMessage = errorDetails.Message;
        this.$bvToast.toast(this.errorMessage, {
          title: errTitle,
          variant: 'danger',
          solid: true,
          autoHideDelay: 5000
        })
      }
    }
  }
});
</script>
