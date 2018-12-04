<template>
    <div>
        <h2>Dashboard</h2>
        <div class="row gap-20">
            <div class="col-md-4" v-for="(project, id) in projects">
                <project-card :id="id" :project="project"></project-card>
            </div>
        </div>
    </div>
</template>

<script>
  import ProjectCard from '../components/dashboard/project-card'
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: 'Dashboard',
    components: {ProjectCard},
    computed: {
      ...mapGetters('projects', ['projects'])
    },
    mounted () {
    },
    methods: {
      ...mapActions('projects', ['addProjects', 'agile']),
      onLoadProjects () {
        this.addProject()
      }
    }
  }
</script>

<style scoped>

</style>