<script setup>
import { useRoute } from 'vue-router'
import AddEditForm from '../components/AddEditForm.vue'

//get route
const route = useRoute()

//get id
console.log(route.params.id)

</script>
<template>
    <div class="container">
        <div class="row mt-3">
        <div class="col-md-8 mx-auto">
            <div class="row"> 
                <AddEditForm :updating="true"/>
            </div>
        </div>
    </div>

    </div> 
</template>