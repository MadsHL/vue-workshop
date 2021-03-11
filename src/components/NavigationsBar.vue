<template>
  <div>
    <v-tabs v-model="tab">
      <v-tab v-for="item in items" :key="item" >{{item}}</v-tab>
    </v-tabs>

    FUUUCK §{{tab}}


    <v-tabs-items v-model="tab">
      <v-tab-item
          v-for="item in items"
          :key="item"
      >
        <v-card
            color="basil"
            flat
        >
          <v-card-text>{{ item }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>


  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import CvrInput from "@/components/CvrInput.vue";

@Component({
  components: { CvrInput }
})
export default class NavigationsBar extends Vue {
  tab = null;
  items = ["Fasteomkostninger", "Løn", "Svig"];
}
</script>
