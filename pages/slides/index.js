import { writeDocuments, getDocuments, removeDocument, logout } from "../../firebase/firebase"

export default {
    name: 'DisplaySlides',
    layout: "nav",
    data() {
        return {
            form: {
                name: ''
            },
            documents:[]
        }
    },
    mounted: async function() {

        this.getDoc();
    },

    methods:{
        async logout(){
            logout();
        },
        
        onSubmit(event) {
            event.preventDefault()
            writeDocuments({name : this.form.name})
        },
        remove: function(uid){
            removeDocument({uid});
            const card = document.getElementById(uid);
            this.getDoc();
        
        },
        async getDoc(){
            await getDocuments((documents) => {
                this.documents = [...documents];
            });
        }
    }
}
