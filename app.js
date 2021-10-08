const app = Vue.createApp({
    data() {
        return {
            data: false
        }
    },
    methods: {
        async getTestimonial() {
            const res = await fetch('https://testimonialapi.toolcarton.com/api')
            const results = await res.json()

            this.data = results[0]
            console.log(this.data, 'hi')
        }
    },
    beforeMount(){
        this.getTestimonial()
     },
})

app.mount('#app')