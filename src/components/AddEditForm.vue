<script setup>
import { onMounted, reactive } from "vue";
import { v4 as uuidv4 } from 'uuid';
import { useCounterStore } from '@/stores/counter'
import { useRoute } from 'vue-router'
import router from "../router";

//get store
const store = useCounterStore()

//get route
const route = useRoute()

//set state
const data = reactive({
    contact : {
        name : "",
        phone : "",
    },
})

//get props
const props = defineProps ({
    updating : {
        type : Boolean,
        default : false,
    }
})
const addContact = () => {
    // let contact = {
    //     name : data.contact.name,
    //     phone : data.contact.phone,
    // }
    let contact = {
        id : uuidv4(),
        name : data.contact.name,
        phone : data.contact.phone
    }
    store.addContact(contact);
    //emit("contactAdded", contact);
    //console.log(data.contact);
    data.contact.name= "";
    data.contact.phone="";
}
const updateContact = () => {
    let contact = {
        id : route.params.id,
        name : data.contact.name,
        phone : data.contact.phone
    }
    store.updateContact(contact);
    router.push("/");
}
//get contact to update (hook)
onMounted(() => {
    if(props.updating){
        data.contact = store.getContact(route.params.id);
        //console.log(data.contact)
    }
})

// const emit = defineEmits(['contactAdded'])

</script>

<template>
    <div class="card mt-2 mx-5">
        <div class="card-body">
           <form>
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input v-model="data.contact.name" 
                    type="text" class="form-control" 
                    id="name" placeholder="Name">
                </div>
                <div class="mb-3">
                    <label for="phone" class="form-label">Phone number</label>
                    <input v-model="data.contact.phone" 
                    type="text" class="form-control" 
                    id="phone" placeholder="phone">
                </div>
                <button v-if="updating" 
                        @click.prevent="updateContact" 
                        :disabled="!data.contact.name || !data.contact.phone"
                        type="submit" 
                        class="btn btn-warning">Update</button>
                <button v-else
                        @click.prevent="addContact" 
                        :disabled="!data.contact.name || !data.contact.phone"
                        type="submit" 
                        class="btn btn-primary">Submit</button>
            </form> 
        </div>
    </div>
    
</template>
