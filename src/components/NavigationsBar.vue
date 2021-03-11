<template>
  <v-card>
    <v-tabs v-model="tab" background-color="primary" dark>
      <v-tab v-for="item in items" :key="item.name">{{ item.name }}</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item.name">
        <v-card color="basil" flat>
          <v-card><cvr-input :svig-tab="item"/></v-card>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import CvrInput from "@/components/CvrInput.vue";
import { SvigTab } from "@/model/SvigTab";

@Component({
  components: { CvrInput }
})
export default class NavigationsBar extends Vue {
  tab = null;
  items = [
    new SvigTab("Fasteomkostninger", "http://shit1"),
    new SvigTab("Løn", "http://shit2"),
    new SvigTab("svig", "http://shit3")
  ];
}
</script>
