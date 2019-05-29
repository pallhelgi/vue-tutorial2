<template>
    <div>
        <h1>
            Cats for Adoption
        </h1>
        <b-table striped hover :items="cats"></b-table>
    </div>
</template>

<script>
/* eslint-disable */
import cats from '@/data/cats'
export default {
    data() {
        return {
            cats // references and returns the imported cats array
        }
    }
}
</script>
