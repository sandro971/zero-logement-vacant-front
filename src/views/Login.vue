<template>
    <div>
    <Header/>
    <main id="login">
        <div class="fr-container">

            <div class="fr-grid-row fr-grid-row--center fr-ml-1w fr-mr-1w fr-mt-10w fr-mb-10w">

                <div class="fr-col-10">

                    <div class="fr-card fr-card--no-arrow fr-card--horizontal">
                        <div class="fr-card__img">
                            <img src="../../public/static/img/login/login.jpg" class="fr-responsive-img" alt="">
                        </div>
                        <div class="fr-card__body">
                            
                            <div class="fr-form-group">
                                <fieldset class="fr-fieldset">
                                    <legend class="fr-fieldset__legend" id="text-legend">
                                        S'identifier
                                    </legend>
                                    <form action="" @submit="submit">
                                        <div class="fr-fieldset__content">
                                            <div class="fr-input-group">
                                                <label class="fr-label" for="username">Username</label>
                                                <input class="fr-input" type="text" id="username" name="username" placeholder="@" v-model="fields.username" required>
                                            </div>
                                            <div class="fr-input-group">
                                                <label class="fr-label" for="password">Mot de passe</label>
                                                <input class="fr-input" type="password" id="password" name="password" placeholder="***********" v-model="fields.password" required>
                                            </div>
                                            <div class="fr-btns-group fr-btns-group--right">
                                                <button class="fr-btn" title="Label bouton">
                                                    S'identifier
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </fieldset>

                                
                                <div class="r-btns-group fr-btns-group--right">
                                    <router-link  class="fr-link fr-fi-arrow-right-line fr-link--icon-right" to="/register">Créer un compte</router-link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <Footer />
    </div>
</template>
<style >
</style>
<script>
	import Header from '../components/Header'
	import Footer from '../components/Footer'
    import axios from 'axios'

	export default {
		name: 'Login',

		components: {
			Header,
			Footer
		},
		data() {
			return {
                fields: {
                    username: "",
                    password: ""
                }
			}
		},
		methods: {
            submit(e){
                e.preventDefault()
                e.stopPropagation()
                
                axios
                    .post('/api/login', this.fields)
                    .then(response => {
                        this.dialog = Vue.$dialogsConfig.login_success
                        localStorage.setItem('token', response.data.token)
                    })
                    .catch(e =>{
                        this.dialog = Vue.$dialogsConfig.login_error
                    })
            }
		}
	}
</script>
