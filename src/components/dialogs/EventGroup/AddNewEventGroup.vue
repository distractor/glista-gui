<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <b-form inline>
          <label class="mr-sm-2" for="event-group-select">Name:</label>
          <b-form-input id="event-group-name" class="mb-2 mr-sm-2 mb-sm-0" placeholder="2021 SLO league" v-model="newEventGroup.name"></b-form-input>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import Vue from "vue";
import { EventGroupApi } from "@/../api-axios/api";
import { EventGroupDTO } from "api-axios/model";

export default Vue.extend({
  name: "AddNewEventGroup",
  data() {
    return {
      // Variables.
      newEventGroup: {} as EventGroupDTO,
      // APIs.
      eventGroupApi: {} as EventGroupApi,
    }
  }
});
</script>
