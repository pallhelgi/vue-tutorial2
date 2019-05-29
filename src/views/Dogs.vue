<template>
    <div>
        <h1>
            Dogs for Adoption
        </h1>
        <b-table striped hover :items="dogs"></b-table>
    </div>
</template>

<script>
/* eslint-disable */
import dogs from '@/data/dogs'
export default {
    data() {
        return {
            dogs // references and returns the imported cats array
        }
    }
}
</script>