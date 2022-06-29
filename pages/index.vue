<template>
  <div>
    <header>
      <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
          <b-navbar-brand href="#">Google Slides</b-navbar-brand>
        </b-navbar>
      </div>
    </header>

    <main>
      <section class="d-flex justify-content-center mt-5">
        <div>
          <b-card title="Connexion" sub-title="">

            <div>
              <b-form @submit="handleRegister">
                <b-form-group
                  id="input-group-1"
                  label="Email address:"
                  label-for="input-1"
                  description="We'll never share your email with anyone else."
                >
                  <b-form-input
                    id="input-1"
                    v-model="login.email"
                    type="email"
                    placeholder="Enter email"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  id="input-group-2"
                  label="Password:"
                  label-for="input-2"
                  description="We'll never share your password with anyone else."
                >
                  <b-form-input
                    id="input-2"
                    v-model="login.password"
                    type="password"
                    placeholder="*****"
                    required
                  ></b-form-input>
                </b-form-group>


                <b-button type="submit" variant="primary">Connexion</b-button>
              </b-form>
            </div>
          </b-card>
        </div>


        <div class="ml-5">
          <b-card title="Inscription" sub-title="">

            <div>
              <b-form @submit="handleRegister">
                <b-form-group
                  id="input-group-1"
                  label="Email address:"
                  label-for="input-1"
                  description="We'll never share your email with anyone else."
                >
                  <b-form-input
                    id="input-1"
                    v-model="form.email"
                    type="email"
                    placeholder="Enter email"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  id="input-group-2"
                  label="Password:"
                  label-for="input-2"
                  description="We'll never share your password with anyone else."
                >
                  <b-form-input
                    id="input-2"
                    v-model="form.password"
                    type="password"
                    placeholder="*****"
                    required
                  ></b-form-input>
                </b-form-group>


                <b-button type="submit" variant="primary">Inscription</b-button>
              </b-form>
            </div>
          </b-card>
        </div>
      </section>
    </main>
  </div>
</template>

<script src="./index.js"></script>
