<template>
  <div class="bg-gray-800">
  <div class="container mx-auto flex flex-wrap justify-start mt-24 text-white p-8 pt-12">
	<div class="mr-16 sm:mr-4 w-56 sm:w-36">
	  <p class="text-xl">Company is Under from spirit behold. Called meat, us bearing bearing beginning.</p>
	</div>
	<div class="mt-12 sm:mt-0 sm:ml-20">
	  <p class="text-green-500 font-medium text-xl mb-4">Company</p>
	  <ul>
		 <a href="#" v-for="menu in menu1" :key="menu.id">
		  <li class="my-4">{{menu.list}}</li>
		 </a>
	  </ul>
	</div>
	<div class="mt-12 sm:mt-0 ml-20">
	  <p class="text-green-500 font-medium text-xl mb-4">Resources</p>
	  <ul>
		<a href="#" v-for="menu in menu2" :key="menu.id">
		  <li class="my-4">{{menu.list}}</li>
		</a>
	  </ul>
	</div>
	<div class="mt-12 sm:mt-0 ml-0 sm:ml-20 w-full sm:w-28">
	  <p class="text-green-500 font-medium text-xl mb-4">Address</p>
	  <p class="">Lampung, Indonesia</p>
	</div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
	return {
	  menu1: [
	  {id:1, list:'Home'},
	  {id:2, list:'Products'},
	  {id:3, list:'Services'},
	  {id:4, list:'Teams'},
	  {id:5, list:'Career'},
	  {id:6, list:'Portfolio'},
	  ],
	   menu2: [
	  {id:1, list:'Terms of Use'},
	  {id:2, list:'Blog'},
	  {id:3, list:'Privacy Policy'},
	  {id:4, list:'About Us'},
	  {id:5, list:'Contact Us'},
	  ]

	}
  }
}
</script>
