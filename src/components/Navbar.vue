<template>
  <div class="container mx-auto flex justify-between items-center pt-6 relative">
    <div class="px-8">
	  <p class="text-xl font-bold text-gray-800">Brand</p>
	</div>
	<div>
	  <ul> 
		<a v-for="list in dataList" :href="list.link" :key="list" class="sm:px-2 sm:py-2">
		  <li class="hidden sm:inline font-medium text-gray-900 ">{{list.name}}</li>
		</a>
		<box-icon name="menu" class="sm:hidden mr-4 p-0" size="md" border="square" @click="sidebarOpen = true"></box-icon>
	  </ul>
	  <ul v-show="sidebarOpen" class="sidebar">
		<box-icon name='x' size="md" class="ml-auto" @click="sidebarOpen = false"></box-icon>
		<a v-for="list in dataList" :href="list.link" :key="list" class="sm:px-2 sm:py-2">
		  <li class="text-center my-4 font-medium text-gray-900 ">{{list.name}}</li>
		</a>
	  </ul>
	</div>	

  </div>
</template>

<script>

export default {
  data() {
	return {
	dataList : [
		{name: "Home", link:"#"},
		{name: "Services", link:"#"},
		{name: "Awards", link:"#"},
		{name: "About Us", link:"#"},
		],
	sidebarOpen: false
	}
  }, 
}

</script>

<style scoped>

  @media(max-width: 640px) {
	box-icon {
	display: inline-block;
	}
  }

</style>

