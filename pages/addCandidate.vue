<template>
    <h1 class="text-center text-2xl font-bold mt-9 mb-9">Add Candidate</h1>
  <div class="mt-9 ml-9 mr-9">
<form>
    <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
            <input type="text" v-model="name" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" >
        </div>
        <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input type="text" v-model="email" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe@gmail.com" >
        </div>
        <div>
            <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
            <input type="text" v-model="agency" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" >
        </div>  
        <div>
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Commision percentage</label>
            <input type="text" v-model="fee1" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="45%" >
        </div>
        <div>
            <label for="website" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Max Commision</label>
            <input type="text" v-model="fee2" id="website" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="56" >
        </div>
    </div>
    <div class="flex justify-center">
    <button type="submit" @click="addCandidate()" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
</div>
</form>
  </div>

</template>

<script setup>

const name = ref(null);
const email = ref(null);
const agency = ref(null);
const fee1 = ref(null);
const fee2 = ref(null);


const { app } = useMyRealmApp();

const mongo = app.currentUser?.mongoClient("mongodb-atlas");
const collection = mongo?.db("company").collection("candidate");

const addCandidate = () => {
    // const newCandidate = {
    //     name: name,
	// 	email: email,
    //     agency: agency,
    //     fee1: fee1,
    //     fee2:fee2,
	// }
    //console.log('newCandidate:', newCandidate)
    collection.insertOne({name:name,email:email,agency:agency,fee1:fee1,fee2:fee2})
    .then(data => {
            console.log(data)
            navigateTo('/candidate')
        })
    

};
</script>

<style>

</style>