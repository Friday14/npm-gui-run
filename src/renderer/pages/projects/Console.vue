<template>
    <div class="card bg-secondary">
        <div class="card-header text-white">
            Console
            <div class="float-right">
                <button class="btn btn-sm btn-dark">Clear</button>
            </div>
        </div>
        <div class="card-body console-body text-white">
            <div v-html="print"></div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Console',
    props: {
      output: {
        type: String
      }
    },
    computed: {
      print () {
        return this.output
      }
    }
  }
</script>

<style scoped>
    .console-body {
        max-height: 200px;
        min-height: 100px;
        overflow-y: scroll;
    }
</style>