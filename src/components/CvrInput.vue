<template>
  <div>
    <v-card> CVR {{ svigTab.name }} </v-card>
    <form @submit.prevent="submit">
      <v-input v-model="cvrnummer" />
      <v-text-field
        v-model="cvrnummer"
        label="CVR nummer"
        required
      ></v-text-field>
    </form>

    <v-expansion-panels >
      <v-expansion-panel v-for="(vaerdi, sagsnr) in dummy.sager" :key="sagsnr">
        <v-expansion-panel-header>
          {{ sagsnr }} - {{vaerdi}}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import { restService } from "@/services/rest.service";
import Vue from "vue";
import { Prop } from "vue-property-decorator";
import { UssSvar } from "@/model/UssSvar";

@Component({
  components: {}
})
export default class CvrInput extends Vue {
  @Prop()
  svigTab: string;
  cvrnummer: number;
  dummy: UssSvar = { sager: {} };

  submit() {
    alert(this.cvrnummer);
    this.dummy = restService.dummy();
  }
}
</script>

<style scoped></style>
