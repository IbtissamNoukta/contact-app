<template>
    <div class="col-md-3">
        <div class="card mb-2">
            <div class="card-body">
                <div class="d-flex align-items-center">
                    <img src="https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_960_720.png" 
                    alt="" class="img-fluid rounded me-2 mb-2" width="60" height="60">
                    <div class="d-flex flex-column">
                       <h6>{{ contact.name }}</h6>
                        <h6 class="text-success">{{ contact.phone }}</h6> 
                    </div>
                    
            </div>
            <div class="card-footer bg-white d-flex 
                        justify-content-between 
                        align-items-center">
                <RouterLink :to="`/edit/${contact.id}`" class="btn btn-sm btn-warning">
                    <i class="bi bi-pencil"></i>
                </RouterLink>
                <button @click="removeContact(contact.id)" class="btn btn-sm btn-danger">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { RouterLink } from 'vue-router'
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()

// get the props from parent to child
const props = defineProps({
    // kt5od object 
    contact:{
        type:Object,
        default: {
            id: "",
            name: "",
            phone: ""
        }
    }
})

//remove contact
const removeContact = (contactId) => {
    store.removeContact(contactId)
    // emit('contactDeleted', contactId);
}

//emit event
// const emit = defineEmits(['contactDeleted'])
</script>