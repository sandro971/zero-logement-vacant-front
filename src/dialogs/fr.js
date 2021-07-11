let config = function(){
    return {
        success:{
            title: "Succès",
            message: "Vos modifications ont bien été enregistrés",
            buttons:[
                {
                    highlight: true,
                    label: "Continuer",
                    handle: _ => this.dialog = null
                }
            ]
        },
        token_error:{
            title: "Erreur",
            message: "Vous devez vous identifier pour accéder à cette partie",
            buttons:[
                {
                    highlight: true,
                    label: "S'identifier",
                    handle: _ => location.href = "/#/login"
                }
            ]
        },
        logout_success:{
            title: "Au revoir",
            message: "Votre session a été cloturée",
            buttons:[
                {
                    highlight: true,
                    label: "S'identifier",
                    handle: _ => location.href = "/#/login"
                }
            ]
        },
        error_401:{
            title: "Erreur",
            message: "Votre session est expirée",
            buttons:[
                {
                    highlight: true,
                    label: "S'identifier",
                    handle: _ => location.href = "/#/login"
                }
            ]
        },
        error:{
            title: "Erreur",
            message: "Une erreur est survenue lors de la communication avec le serveur",
            buttons:[
                {
                    highlight: true,
                    label: "Continuer",
                    handle: _ => this.dialog = null
                }
            ]
        },
        login_error:{
            title: "Erreur",
            message: "Une erreur est survenue lors de la communication avec le serveur",
            buttons:[
                {
                    highlight: true,
                    label: "Continuer",
                    handle: _ => this.dialog = null
                }
            ]
        },
        login_success:{
            title: "Féliciation !",
            message: "Vous êtes maintenant connecté",
            buttons:[
                {
                    highlight: true,
                    label: "Continuer",
                    handle: _ => this.dialog = null
                }
            ]
        },
        register_success:{
            title: "Féliciation !",
            message: "Vous êtes maintenant enregistré",
            buttons:[
                {
                    highlight: true,
                    label: "Continuer",
                    handle: _ => this.dialog = null
                }
            ]
        },
        register_error:{
            title: "Erreur",
            message: "Une erreur est survenue lors de la communication avec le serveur",
            buttons:[
                {
                    highlight: true,
                    label: "Continuer",
                    handle: _ => this.dialog = null
                }
            ]
        },
        hash_success:{
            title: "Résultat",
            message: "",
            buttons:[
                {
                    highlight: true,
                    label: "Continuer",
                    handle: _ => this.dialog = null
                }
            ]
        },
    }
}

export default config