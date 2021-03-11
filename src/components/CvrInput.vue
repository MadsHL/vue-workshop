<template>
  <div>
    <v-card>
      CVR {{ svigTab.name }}
    </v-card>
    <form @submit.prevent="submit">
      <v-input v-model="cvrnummer"/>
      <v-text-field
          v-model="cvrnummer"
          label="CVR nummer"
          required
      ></v-text-field>
    </form>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import {Prop} from "vue-property-decorator";

@Component({
  components: {}
})
export default class CvrInput extends Vue {
  @Prop()
  svigTab: string;
  cvrnummer: number;

  submit() {
    alert(this.cvrnummer)
  }
}
</script>

<style scoped></style>
