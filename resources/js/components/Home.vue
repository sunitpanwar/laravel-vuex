<template>

<div>
<h1 class="cover-heading">{{getHomeHeading}}</h1>
<p class="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
<p class="lead">
  <a href="#" class="btn btn-lg btn-secondary">Learn more</a>
</p>
</div>
    
</template>
<script>
export default {
     name: "Home",
  
      mounted() {

        this.$store.dispatch("getHomeHeading")

      },
      computed: {
        getHomeHeading(){ //final output from here
            return this.$store.getters.getHomeHeadingGetters
        }
      },
};
</script>