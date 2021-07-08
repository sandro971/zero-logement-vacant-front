<template>
    <dialog aria-labelledby="fr-modal-2-title" id="fr-modal-2" class="fr-modal fr-modal--opened" role="dialog" >
        <div class="fr-container--fluid">
            <div class="fr-grid-row fr-grid-row--center">
                <div class="fr-col-12 fr-col-md-6">
                    <div class="fr-modal__body">
                        <div class="fr-modal__header">
                            <!-- <button class="fr-link--close fr-link" aria-controls="fr-modal-2">Fermer</button> -->
                        </div>
                        <div class="fr-modal__content">
                            <h1 id="fr-modal-2-title" class="fr-modal__title">
                                <span class="fr-fi-arrow-right-line fr-fi--lg"></span>
                                {{title}}
                            </h1>
                            <p v-html="message"></p>
                        </div>
                        <div class="fr-modal__footer">
                            <ul class="fr-btns-group fr-btns-group--right fr-btns-group--inline-reverse fr-btns-group--inline-lg fr-btns-group--icon-left">
                                <li v-for="bt in buttons">
                                    <button class="fr-btn fr-fi-checkbox-line" 
                                        v-bind:class="{'fr-btn--secondary': !bt.highlight}" 
                                        @click="bt.handle">
                                        {{bt.label}}
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </dialog>
</template>

<script>

	export default {
		name: 'Dialog',

		components: {
		},
		data() {
			return this.$attrs.config
        },
		methods: {
		},
        created(){
        }
	}
</script>