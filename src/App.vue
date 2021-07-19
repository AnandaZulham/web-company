<template>
  <div id="app" class="h-full w-screen bg-gray-50">
    <Navbar />
	<Hero />
	<Service />
	<About />
	<JoinTeam />
	<Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import Service from '@/components/Services.vue'
import About from '@/components/About.vue'
import Footer from '@/components/Footer.vue'
import JoinTeam from '@/components/JoinTeam.vue'

export default {
  name: 'App',
  components: {
    Navbar,
	Hero, 
	Service,
	About,
	Footer,
	JoinTeam
  }
}
</script>
