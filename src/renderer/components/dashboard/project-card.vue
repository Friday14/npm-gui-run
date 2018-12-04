<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title">
                {{ project.name }}
            </h3>
            <div class="card-text">
                <b>Author</b>
                {{ author }}
            </div>
            <div class="card-text">
                <b>Description</b>
                <i>{{ project.description }}</i>
            </div>
        </div>
        <div class="card-footer border-0">
            <div class="float-left">
                <div class="text-muted" v-if="project.version">
                    <i class="fa fa-code-fork"></i> {{ project.version }}
                </div>
            </div>
            <div class="float-right">
                <button class="btn btn-sm btn-secondary"
                        @click.prevent="$router.push({ name: 'projects.show', params: {id: id}})">
                    <i class="fa fa-file-archive-o"></i>
                    Information
                </button>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'project-card',
    props: {
      id: {
        type: Number,
        required: true
      },
      project: {
        type: Object,
        required: true
      }
    },
    computed: {
      author () {
        if (!this.project.author) {
          return 'Anonymous Sanya'
        }
        let str = this.project.author.split('<')
        if (str.length > 1) {
          return str[0].trim()
        }
        return this.project.author
      }
    }
  }
</script>

<style scoped>

</style>