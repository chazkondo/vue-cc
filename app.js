const app = Vue.createApp({
    template: '<h1>Vue CC {{data}}</h1>',
    data() {
        return {
            data: "Business data"
        }
    }
})

app.mount('#app')