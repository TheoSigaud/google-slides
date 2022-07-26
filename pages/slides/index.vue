<template>
    <div>
        
        <div class=" mt-2 mx-2">
                <b-button class="btn-slide" type="submit" v-b-modal.modal-1 >Nouveau document</b-button>
        </div>
   
        <b-modal ok-only id="modal-1" title="Nouvelle présentation" hide-footer>
            <div>
                <b-form @submit="onSubmit">
                    <b-form-group id="input-group-1" label="Nom du document :">
                        <b-form-input  v-model="form.name" id="input-1" type="text" required></b-form-input>
                    </b-form-group>

                    <b-button type="submit" class="btn-slide" @click="$bvModal.hide('modal-1')">Créer</b-button>
                </b-form>
            </div>
        </b-modal>
        <b-container class="mt-5">
            <b-row>
                <b-col v-for="(document, id) in documents" :key="document.key">
                    <b-card
                        v-bind:id="document.key"
                        :title="'Diaporama n°' +(id+1)"
                        tag="article"
                        class="mb-2"
                        style="width: 20rem;"
                    >
                        <b-card-text>
                            {{document.value.name}}
                        </b-card-text>

                        <b-button :to="'/slides/'+document.key" variant="primary">Voir</b-button>
                        <b-button :to="'/revealJs/'+document.key" variant="primary">Diaporama</b-button>
                        <b-button v-on:click="remove(document.key)" variant="danger">Supprimer</b-button>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script src="./index.js"></script>

