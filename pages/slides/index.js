import { getDocuments } from "../../firebase/firebase";

export default {
    name: 'DisplaySlides', 
    middleware: 'authenticated',
    data() {
        return {
            form: {
                name: ''
            },
            documents:[]
        }
    }, 
    mounted: async function() {
        
        await getDocuments((documents) => {
            console.log(documents);
            this.documents = [...documents];
        });


       
        
    },
    methods:{
        onSubmit(event) {
            event.preventDefault()
            alert(JSON.stringify(this.form))
        },
    }
}