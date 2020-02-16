export default {

	state: {

       homeHeading: "",
       featureHeading: "",
       contactHeading: "",

	},

	getters: {

        getHomeHeadingGetters(state){ //take parameter state

          return state.homeHeading
        },
        getFeatureHeadingGetters(state){ //take parameter state

            return state.featureHeading
        },
        getContactHeadingGetters(state){ //take parameter state

            return state.contactHeading
        },
       
	},

	actions: {
        getHomeHeading(context){

          axios.get("api/home_heading")

               .then((response)=>{
                
                  context.commit("setHomeHeading",response.data.heading) //categories will be run from mutation

               })

               .catch(()=>{
                  
                  console.log("Error........")
                  
               })
       },
       getFeatureHeading(context){

        axios.get("api/feature_heading")

             .then((response)=>{
              
                context.commit("setFeatureHeading",response.data.heading) //categories will be run from mutation

             })

             .catch(()=>{
                
                console.log("Error........")
                
             })
        }, 
        getContactHeading(context){

            axios.get("api/contact_heading")
    
                 .then((response)=>{
                  
                    context.commit("setContactHeading",response.data.heading) //categories will be run from mutation
    
                 })
    
                 .catch(()=>{
                    
                    console.log("Error........")
                    
                 })
        },       
	},

	mutations: {
        setHomeHeading(state,data) {
            return state.homeHeading = data
        },
        setFeatureHeading(state,data) {
            return state.featureHeading = data
        },
        setContactHeading(state,data) {
            return state.contactHeading = data
        },            

	}
}