<template>
  <b-modal :visible.sync="modalVisible" size="md" title="Add new scoring" centered header-bg-variant="light" ok-title="Add" ok-variant="info" @hide="hideModal()">
    <b-container fluid>
      <b-form>
        <!-- Scoring name. -->
        <b-form-group inline>
          <label class="mr-sm-2" for="scoring-select">Name:</label>
          <b-form-input id="scoring-name" class="mb-2 mr-sm-2 mb-sm-0" placeholder="MotoGP-like" v-model="newScoring.name" :state="!$v.newScoring.name.$invalid" aria-describedby="scoring-name-feedback"></b-form-input>
          <b-form-invalid-feedback id="scoring-name-feedback">This is a required field.</b-form-invalid-feedback>
        </b-form-group>

        <!-- Scoring type. -->
        <b-form-group inline>
          <label class="mr-sm-2" for="type-select">Type:</label>
          <b-form-select id="type-selector" class="mb-2 mr-sm-2 mb-sm-0" :options="scoringTypes" v-model="newScoring.type" :state="!$v.newScoring.type.$invalid" aria-describedby="scoring-type-feedback"></b-form-select>
          <b-form-invalid-feedback id="scoring-type-feedback">This is a required field.</b-form-invalid-feedback>
        </b-form-group>

        <!-- Tables. -->
        <b-form-group inline>
          <label class="mr-sm-2" for="table-select">Scoring tables:</label>
          <b-form-checkbox-group id="table-selector" v-model="newScoring.tables" :options="scoringTables" class="mb-3" :state="!$v.newScoring.tables.$invalid" aria-describedby="scoring-table-feedback"></b-form-checkbox-group>
          <b-form-invalid-feedback id="scoring-table-feedback">This is a required field.</b-form-invalid-feedback>
        </b-form-group>

        <!-- Nationalities. -->
        <b-form-group inline>
          <label class="mr-sm-2" for="nation-add">Nationalities:</label>
          <ul>
            <li v-for="nation in newScoring.nationalities" :key="nation">{{nation}}</li>
          </ul>
          <b-input-group prepend="Add nation:" class="mt-3">
            <b-form-input v-model="newNationName"></b-form-input>
            <b-input-group-append>
              <b-button variant="info" @click="addNationToList()">Add</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>

        <!-- Points. -->
        <b-form-group inline>
          <label class="mr-sm-2" for="point-add">Points:</label>
          <ul>
            <li v-for="(point, index) in newScoring.points" :key="point">rank: {{index + 1}}. -> points: {{point}}</li>
          </ul>
          <b-input-group prepend="Add points:" class="mt-3">
            <b-form-input v-model="points"></b-form-input>
            <b-input-group-append>
              <b-button variant="info" @click="addPointsToList()">Add</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-form>
    </b-container>
    <template #modal-footer>
      <b-form inline>
        <b-button variant="secondary" class="mb-2 mr-sm-2 mb-sm-0" @click="hideModal()">Cancel</b-button>
        <b-button variant="info" class="mb-2 mr-sm-2 mb-sm-0" @click="addNewScoring()" v-if="!addingNewScoring && !newScoringAdded">Add</b-button>
        <b-spinner type="grow" label="Spinning" variant="info" v-if="addingNewScoring && !newScoringAdded"></b-spinner>
        <b-button variant="info" class="mb-2 mr-sm-2 mb-sm-0" @click="closeModal()" v-if="!addingNewScoring && newScoringAdded">Close</b-button>
      </b-form>
    </template>
  </b-modal>
</template>

<script lang="ts">
import Vue from "vue";
import { ScoringApi } from "@/../api-axios/api";
import { AddNewScoringDTO, AddNewScoringDTOTables, AddNewScoringDTOType } from "@/../api-axios/model";
import ServiceHelper from "@/helpers/ServiceHelper";
import { AddNewScoringDTOValidator } from "@/models/VuelidateValidators";

export default Vue.extend({
  name: "AddNewScoring",
  data() {
    return {
      // Variables.
      addingNewScoring: false,
      newScoringAdded: false,
      errorMessage: '',
      newNationName: '',
      points: -1 as number,
      scoringTypes: AddNewScoringDTOType,
      scoringTables: AddNewScoringDTOTables,
    }
  },

  props: {
    // Variables.
    modalVisible: Boolean,
    newScoring: {
      type: Object as () => AddNewScoringDTO,
    },

    // APIs.
    scoringApi: ScoringApi,
  },

  validations: {
    newScoring: AddNewScoringDTOValidator,
  },

  methods: {
    /**
     * Is null or empty helper.
     */
    isNullOrEmpty(obj: any): boolean {
      return ServiceHelper.IsNullOrEmpty(obj)
    },

    /**
     * Add points to list.
     */
    addPointsToList() {
      if (this.isNullOrEmpty(this.newScoring.points)) {
        this.newScoring.points = [] as Array<number>;
      }
      if (this.points != -1) {
        this.newScoring.points?.push(this.points);
        this.points = -1;
      }
    },

    /**
     * Add nation to list.
     */
    addNationToList() {
      if (this.isNullOrEmpty(this.newScoring.nationalities)) {
        this.newScoring.nationalities = [] as Array<string>;
      }
      if (!this.isNullOrEmpty(this.newNationName)) {
        this.newScoring.nationalities.push(this.newNationName);
        this.newNationName = '';
      }
    },

    /**
     * Close modal and reload event groups.
     */
    closeModal() {
      this.hideModal();
      this.$emit("load-scorings", true);
    },

    /**
     * Execute on hide modal.
     */
    hideModal() {
      this.addingNewScoring = false;
      this.newScoringAdded = false;
      this.errorMessage = '';
      this.newNationName = '';
      this.$emit("clear-new-scoring-object");
      this.$emit("toggle-visibility", false);
    },

    /**
     * Add new scoring.
     */
    async addNewScoring() {
      // Validate all fields.
      this.$v.$touch();

      // Invalid, becomes true when a validations return false.
      const isValid = !this.$v.$invalid;
      if (!isValid) {
        this.errorMessage = "Check input fields and fill with valid values.";
        this.$bvToast.toast(this.errorMessage, {
          title: 'Error',
          variant: 'danger',
          solid: true,
          autoHideDelay: 5000
        })
        return;
      } else {
        this.errorMessage = "";
      }

      // Assign missing values.
      this.newScoring.parameters = '{}';

      // Go to API endpoint.
      try {
        this.addingNewScoring = true;
        const response = await this.scoringApi.apiScoringPost(this.newScoring);
        this.addingNewScoring = false;

        if (ServiceHelper.CheckResponseStatusCode(response.status)) {
          this.newScoringAdded = true;
          const insertedScoring = response.data;
          this.$bvToast.toast(`Scoring '${insertedScoring.name}' successfully added.`, {
            title: "Scoring added.",
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
        this.newScoringAdded = false;
        this.addingNewScoring = false;
        const errTitle = "An error has occurred while adding new scoring.";
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
