<template>
  <div>
    <input v-model="country" type="text" />
    <List :coronaData="response" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { coronaModule } from "../../store/modules/corona";
import { FormatArray } from "../../utils/FormatArray";
import List from "./List.vue";

@Component({
  components: {
    List
  }
})
export default class Corona extends Vue {
  country = "";
  features = coronaModule.features;

  get response() {
    const features = coronaModule.features;
    const filteredData = FormatArray(features)?.filter(({ name }) =>
      this.country
        ? name.toLowerCase().indexOf(this.country.toLowerCase()) >= 0
        : true
    );
    return filteredData;
  }

  handleSubmit() {
    console.log("submit");
  }
}
</script>
