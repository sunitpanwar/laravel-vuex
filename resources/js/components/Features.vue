<template>
    <div>
        <h1 class="cover-heading">{{getFeatureHeading}}</h1>
        <p class="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
    </div>
</template>
<script>
export default {
     name: "Feature",
  
      mounted() {

        this.$store.dispatch("getFeatureHeading")

      },
      computed: {
        getFeatureHeading(){ //final output from here
            return this.$store.getters.getFeatureHeadingGetters
        }
      },
};
</script>