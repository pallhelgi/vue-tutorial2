<template>
    <div>
        <h1>{{ animal.name }} ({{ $route.params.species }}) </h1>
        <p>Age: {{ animal.age }} years old</p>
        <p>Breed: {{ animal.breed }}</p>
    </div>
</template>

<script>
/* eslint-disable */
import { mapState } from 'vuex'

export default {
    data() {
        return {
            animal: {}
        }
    },
    computed: {
        /*cats() {
            return this.$store.state.cats
        }
        This is the same as doing mapState but is not the standard
        */
        ...mapState([
            'cats',
            'dogs'
        ])
    },
    mounted() {
        const animal = this[this.$route.params.species][this.$route.params.id]
                    // this.species[index id]
        this.animal = animal

    }
}   
</script>
