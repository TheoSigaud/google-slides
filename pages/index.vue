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
      <section>
        <div class="container">
          <b-alert variant="success" show v-if="success">Success register</b-alert>
          <b-alert variant="danger" show v-if="error">{{error}}</b-alert>

          <div class="d-flex justify-content-center mt-5">
            <div v-if="checkLogin">
              <b-card title="Connexion" sub-title="">
                <div>
                  <b-form v-on:submit.prevent="handleLogin">
                    <b-form-group
                      id="group-login-1"
                      label="Email address:"
                      label-for="login-1"
                      description="We'll never share your email with anyone else."
                    >
                      <b-form-input
                        id="login-1"
                        v-model="login.email"
                        type="email"
                        placeholder="Enter email"
                        required
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group
                      id="group-login-2"
                      label="Password:"
                      label-for="login-2"
                      description="We'll never share your password with anyone else."
                    >
                      <b-form-input
                        id="login-2"
                        v-model="login.password"
                        type="password"
                        placeholder="*****"
                        required
                      ></b-form-input>
                    </b-form-group>

                    <b-button block variant="primary" type="submit">Connexion</b-button>

                    <div class="d-flex justify-content-end mt-4">
                      <small class="primary" @click="checkLogin = !checkLogin">Register</small>
                    </div>
                  </b-form>
                </div>
              </b-card>
            </div>


            <div v-else>
              <b-card title="Register" sub-title="">

                <div>
                  <b-form v-on:submit.prevent="handleRegister">
                    <b-form-group
                      id="group-register-1"
                      label="Email address:"
                      label-for="register-1"
                      description="We'll never share your email with anyone else."
                    >
                      <b-form-input
                        id="register-1"
                        v-model="form.email"
                        type="email"
                        placeholder="Enter email"
                        required
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group
                      id="group-register-2"
                      label="Password:"
                      label-for="register-2"
                      description="We'll never share your password with anyone else."
                    >
                      <b-form-input
                        id="register-2"
                        v-model="form.password"
                        type="password"
                        placeholder="*****"
                        required
                      ></b-form-input>
                    </b-form-group>

                    <b-button block variant="primary" type="submit">Register</b-button>

                    <div class="d-flex justify-content-end mt-4">
                      <small class="primary" @click="checkLogin = !checkLogin">Connexion</small>
                    </div>
                  </b-form>
                </div>
              </b-card>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script src="./index.js"></script>
