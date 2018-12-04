import {Project} from '../../../services/project'

const service = new Project()

const state = {
  projects: [],
  error: null
}

const getters = {
  projects: (state) => state.projects,
  projectById: (state) => (id) => state.projects[id]
}
const mutations = {
  ADD_PROJECT (state, project) {
    state.projects.push(project)
  },
  ADD_PROJECT_ERROR (state, error) {
    state.error = error
  }
}
const actions = {
  async addProject ({commit}, folder) {
    console.log(folder)
    let project = await service.parse(folder)
    if (project.error) {
      commit('ADD_PROJECT_ERROR', project.error)
    } else {
      project.folder = folder
      commit('ADD_PROJECT', project)
    }
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
