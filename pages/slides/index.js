export default {
    data() {

        return {
            form: {
                name: ''
            }
        }
    }, 
    methods:{
        onSubmit(event) {
            event.preventDefault()
            alert(JSON.stringify(this.form))
        },
    }
}