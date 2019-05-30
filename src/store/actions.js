export default {
  addPet: ({ commit }, payload) => {
    commit('appendPet', payload) // appendPet references a mutatoin funtion that get called
  }
}
