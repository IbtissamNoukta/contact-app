<script setup>
import Contact from '../components/Contact.vue'
import AddEditForm from '../components/AddEditForm.vue'
import { reactive } from 'vue'
import { useCounterStore } from '@/stores/counter'

//get store
const store = useCounterStore()

//add contact
// const addContact= (contact) => {
//   //unshift add fi lwl dtable
//   store.addContact(contact);
//   //console.log(store.contacts);
// }

//remove contact
// const removeContact = (contactId) => {
//   //contact <=> item
//   //store.contacts = store.contacts.filter(contact => contact.id !== contactId);
//   store.removeContact(contactId)
// }
</script>

<template>
  <div class="container">
    <div class="row mt-3">
        <div class="col-md-8 mx-auto">
            <div class="row"> 
                <AddEditForm />
                <!-- @contact-added="addContact" -->
            </div>
        </div>
    </div>
    <div class="row mt-3">
        <div class="col-md-12">
            <div class="row"> 
              <!-- knsiftoh lcomponent contact bi :contact -->
                <Contact v-for="contact in store.contacts" 
                :key="contact.id" 
                :contact="contact"/>
                <!-- @contact-deleted="removeContact" -->
            </div>
        </div>
    </div>
  </div>
</template>
