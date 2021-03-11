<template>
  <div>
    <v-tabs v-model="tab">
      <v-tab v-for="item in items" :key="item.name" >{{item.name}}</v-tab>
    </v-tabs>

    FUUUCK §{{tab}}

    <v-tabs-items v-model="tab">
      <v-tab-item
          v-for="item in items"
          :key="item.name"
      >
        <v-card
            color="basil"
            flat
        >
          <v-card-text>{{ item.name }} -> {{item.url}}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>


  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import CvrInput from "@/components/CvrInput.vue";
import {SvigTab} from "@/model/SvigTab";

@Component({
  components: { CvrInput }
})
export default class NavigationsBar extends Vue {
  tab = null;
  items = [
    new SvigTab("Fasteomkostninger", "http://shit1"),
    new SvigTab("Løn", "http://shit2"),
    new SvigTab("svig", "http://shit3"),
  ];
}
</script>
