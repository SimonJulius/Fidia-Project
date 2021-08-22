<template>
  <div class="table">
    <div class="table-header">
      <span v-for="title in titles" :key="title">{{ title }}</span>
    </div>
    <div class="table-body">
      <div v-for="(dataValues, index) in values" :key="index">
        <span v-for="(value, index) in dataValues" :key="index">{{ value }}</span>
      </div>
    </div>
    <div class="pagination-control">
      <span>16</span>
      <div class="control-pane"><span> 1 </span> <span>2</span></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array
    }
  },
  data() {
    return {
      titles: [],
      values: [],
      countsPerPage: null
    }
  },
  created() {
    this.titles = Object.keys(this.data[0])

    this.data.forEach((object) => {
      const value = Object.values(object)
      this.values.push(value)
    })
  }
}
</script>

<style scoped>
.table {
  width: 100%;
  background: transparent;
}
.table-header {
  width: 100%;
  border-bottom: 1px solid #e3e8ee;
  border-top: 1px solid #e3e8ee;
  padding: 0.5rem 1rem;
}

.table-header > span,
.table-body > div > span {
  border: 1px solid red;
  margin-right: calc(100% / 4);
}

.table-body > div {
  width: 100%;
  border-bottom: 1px solid #e3e8ee;
  padding: 0.2rem 1rem;
}
.pagination-control {
  display: flex;
}
.control-pane {
  margin-left: auto;
}
</style>
