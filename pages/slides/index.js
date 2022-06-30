

import { writeDocuments, getDocuments } from "../../firebase/firebase"

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
           
            this.documents = [...documents];
        });


       
        
    },
    methods:{
        onSubmit(event) {
            event.preventDefault()
            writeDocuments({name : this.form.name})
        },
    }
}