<template>
	<header role="banner" class="fr-header">
		<div class="fr-header__body">
			<div class="fr-container">
				<div class="fr-header__body-row">
					<div class="fr-header__brand fr-enlarge-link">
						<div class="fr-header__brand-top">
							<div class="fr-header__logo">
								<p class="fr-logo">
									République
									<br>Française
								</p>
							</div>
							<div class="fr-header__navbar">
								<button class="fr-btn--search fr-btn" data-fr-opened="false" aria-controls="modal-788" title="Rechercher">
									Rechercher
								</button>
								<button class="fr-btn--menu fr-btn" data-fr-opened="false" aria-controls="modal-792" aria-haspopup="menu" title="Menu">
									Menu
								</button>
							</div>
						</div>
						<div class="fr-header__service">
							<router-link to="/" title="Accueil -  ZLV / demo">
								<p class="fr-header__service-title">Zéro logement vacant</p>
							</router-link>
							<p class="fr-header__service-tagline" >demo</p>
						</div>
					</div>
					<div class="fr-header__tools">
						<div class="fr-header__tools-links">
							<ul class="fr-links-group">
								<li>
									<router-link class="fr-link fr-fi-lock-line" to="/login">Se connecter</router-link>
								</li>
								<li>
									<router-link class="fr-link fr-fi-account-line" to="/register">S’enregistrer</router-link>
								</li>
							</ul>
						</div>
						<div class="fr-header__search fr-modal" id="modal-788">
							<div class="fr-container fr-container-lg--fluid">
								<button class="fr-link--close fr-link" aria-controls="modal-788">Fermer</button>
								<div class="fr-search-bar" id="search-787" role="search">
									<label class="fr-label" for="search-787-input">Recherche
									</label>
									<input class="fr-input" placeholder="Rechercher" type="search" id="search-787-input" name="search-787-input">
									<button class="fr-btn" title="Rechercher">
										Rechercher
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="fr-header__menu fr-modal" id="modal-792" aria-labelledby="button-793">
			<div class="fr-container">
				<button class="fr-link--close fr-link" aria-controls="modal-792">Fermer</button>
				<div class="fr-header__menu-links"></div>
				<nav class="fr-nav" id="navigation-791" role="navigation" aria-label="Menu principal">
					<ul class="fr-nav__list">
						<li class="fr-nav__item">
							<router-link to="/" class="fr-nav__link" aria-expanded="false">App</router-link>
						</li>
						<li class="fr-nav__item">
							<router-link to="/login" class="fr-nav__link" aria-expanded="false">Login</router-link>
						</li>
						<li class="fr-nav__item">
							<router-link to="/register" class="fr-nav__link" aria-expanded="false">Register</router-link>
						</li>
						<li class="fr-nav__item">
							<div to="#" class="my-click fr-nav__link" @click="logout">Logout</div>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
</template>
<style>
	.my-click{
		cursor: pointer;
	}
</style>
<script>
    import axios from 'axios'

	export default {
		name: 'Header',

		components: {
		},
		data() {
			return {
			}
		},
		methods:{
			logout(e){
				e.preventDefault()
				e.stopPropagation()

				var token = localStorage.getItem('token')

				if(!token){
					return this.dialog = this.$store.state.dialogsConfig.error
				}

				axios
					.post('/api/logout', null, {
						headers: {
							'Authorization': `Basic ${token}` 
						}
					})
					.then(response => {
                        this.dialog = this.$store.state.dialogsConfig.logout_success
						localStorage.removeItem('token')
					})
					.catch(e =>{
                        this.dialog = this.$store.state.dialogsConfig.error
					})
			}
		}
	}
</script>
