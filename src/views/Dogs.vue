<template>
    <div>
        <PetTable
            species="dogs"
            :pets="dogs"
        /> <!-- species="cats", the string cats passed on to species
                :pets="cats", the array cats passed on to the pets array
            -->
    </div>
</template>

<script>
/* eslint-disable */
import { mapState } from 'vuex'
import PetTable from '@/components/PetTable.vue'

export default {
    components: {
        PetTable
    },
    data() {
        return {}
    },
    computed: {
        ...mapState([
            'dogs'
        ])
    }
}
</script>