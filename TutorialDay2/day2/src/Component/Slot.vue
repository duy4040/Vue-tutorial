<template>
  <div class="demo-slot">
    <Tab title="Tab's title">
      <ul class="tab-header">
        <li 
            v-for="(item, index) in tabHeader" 
            v-bind:key="index"
            v-on:click="selectTab(index)"
            v-bind:class="{ acctive: tabActive === index}"
        >
          {{ item.text }}
        </li>
      </ul>
      <div class="tab-content tab1" v-if="tabActive === 0">
        <p>
          Tab1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
          assumenda nemo voluptas itaque! Doloremque reiciendis eligendi quia
          neque ad eos praesentium unde reprehenderit expedita perspiciatis,
          laboriosam cupiditate voluptas numquam eaque.
        </p>
      </div>
      <div class="tab-content tab2" v-else-if="tabActive === 1">
        <p>
          Tab2 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
          assumenda nemo voluptas itaque! Doloremque reiciendis eligendi quia
          neque ad eos praesentium unde reprehenderit expedita perspiciatis,
          laboriosam cupiditate voluptas numquam eaque.
        </p>
      </div>
      <div class="tab-content tab3" v-else>
        <p>
          Tab3 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
          assumenda nemo voluptas itaque! Doloremque reiciendis eligendi quia
          neque ad eos praesentium unde reprehenderit expedita perspiciatis,
          laboriosam cupiditate voluptas numquam eaque.
        </p>
      </div>
    </Tab>
  </div>
</template>

<script>
import Tab from "./Tab.vue";
export default {
  name: "comp-slot",
  components: {
    Tab,
  },
  data() {
    return {
      tabHeader: [{ text: "tab1" }, { text: "tab2" }, { text: "tab3" }],
      tabActive: 0
    };
  },
  methods: {
    selectTab(index) {
        this.tabActive = index;
    }
  }
};
</script>

<style>
.demo-slot {
  margin-top: 100px;
  padding: 100px 30px;
  border: 1px solid #000;
}
</style>
