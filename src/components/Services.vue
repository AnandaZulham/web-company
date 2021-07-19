<template>
  <div class="container mx-auto mt-16">
	<p class="text-center text-gray-900 font-medium text-2xl sm:text-3xl">Our Services</p>
	<div class="container flex flex-col flex-wrap sm:flex-row justify-center mt-12  mx-auto">
	  <div v-for="card in cards" :key="card.id" class="card sm:w-60">
		<img :src="card.image" alt="image" class="mx-auto">
		<p class="text-lg mt-4 font-medium text-gray-800">{{card.title}}</p>
		<p class="text-gray-500 mt-4">{{card.subtitle}}</p>
	  </div>
	</div>
  </div>
</template>

<script>
export default {
  data () {
	return {
	  cards : [
	  {id: 1, image:'https://img.icons8.com/material/48/26e07f/smartphone-approve.png', title: 'Mobile Application', subtitle: 'All moved every shall be let Hath green earth made sixth man grass blessed third every good.'},
	  {id: 2, image: 'https://img.icons8.com/material/48/26e07f/domain.png', title: 'Web Application', subtitle: 'All moved every shall be let Hath green earth made sixth man grass blessed third every good.'},
	  {id: 3, image:'https://img.icons8.com/material/48/26e07f/remote-desktop.png', title: 'Desktop Application', subtitle: 'All moved every shall be let Hath green earth made sixth man grass blessed third every good.'},
	  ]
	}
  }
}
</script>
