<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">Google Slides</b-navbar-brand>

            <b-navbar-nav class="ml-auto">
                <b-button class="btn-slide" type="submit" v-b-modal.modal-1 >Nouveau document</b-button>
            </b-navbar-nav>
        </b-navbar>
        <b-modal ok-only id="modal-1" title="Nouvelle présentation">
            <div>
                <b-form @submit="onSubmit">
                    <b-form-group id="input-group-1" label="Nom du document :">
                        <b-form-input  v-model="form.name" id="input-1" type="text" required></b-form-input>
                    </b-form-group>
                    <b-button type="submit" class="btn-slide">Créer</b-button>
                </b-form>
            </div>
        </b-modal>
    </div>
</template>

<script src="./index.js"></script>

