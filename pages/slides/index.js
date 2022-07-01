import { writeDocuments, getDocuments, removeDocument } from "../../firebase/firebase"

export default {
    name: 'DisplaySlides',

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
        remove: function(uid){
            removeDocument({uid});
            const card = document.getElementById(uid);
            card.parentNode.removeChild(card);
        
        }
    }
}
