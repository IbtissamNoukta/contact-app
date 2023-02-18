import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })

export const useCounterStore = defineStore('contacts', () => {
//state contacts[]

//actions
  function addContact(contact) {
    //unshift add fi lwl dtable
    //this not data
    this.contacts.unshift(contact)
    //console.log(store.contacts);
  }
  function removeContact(contactId) {
    //contact <=> item
    this.contacts = this.contacts.filter(contact => contact.id !== contactId);
  }
  function updateContact(contact){
    let index = this.contacts.findIndex(item => item.id === contact.id);
    this.contacts[index].name = contact.name;
    this.contacts[index].phone = contact.phone;
  }
//getters
  //recuperer contact
  function getContact(contactId){
    return this.contacts.find(contact => contact.id === contactId);
  }
  function getContactCount(){
    return this.contacts.length;
  }




  return { contacts: [] , addContact, removeContact, getContact, updateContact, getContactCount}
})
