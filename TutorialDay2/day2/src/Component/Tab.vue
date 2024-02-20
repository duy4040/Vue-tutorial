<template>
  <div class="comp-tab">
    <div class="tab-title">
        <span>{{ title }}</span>
    </div>
    <div class="tabs-content">
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
    name: 'comp-tab',
    props: {
        title: String
    },
    data() {
        return {

        }
    }
}
</script>

<style>
    .tab-title {
        padding: 15px 30px;
        border: 1px solid #000;
    }
    .tabs-content {
        margin-top: 2px;
        border: 2px solid blue;
        text-align: left;
    }
    .tab-header {
        padding: 0;
        margin: 0;
        display: flex;
        list-style-type: none;
    }
    .tab-header li {
        padding: 8px 15px;
        background-color: #ccc;
        transition: all .2s ease;
    }
    .tab-header li:hover {
        color: #fff;
        background-color: #333;
    }
    .tab-content {
        padding: 15px;
        border: 2px solid green;
        text-align: left;
    }
</style>