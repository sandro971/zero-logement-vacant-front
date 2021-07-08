let config = function(context){
    return {
        success(context){
            return {
                title: "Succès",
                message: "Vos modifications ont bien été enregistrés",
                buttons:[
                    {
                        highlight: true,
                        label: "Continuer",
                        handle: _ => context.dialog = null
                    }
                ]
            }
        },
        token_error(context){
            return {
                title: "Erreur",
                message: "Vous devez vous identifier pour accéder à cette partie",
                buttons:[
                    {
                        highlight: true,
                        label: "S'identifier",
                        handle: _ => location.href = "/#/login"
                    }
                ]
            }
        },
        logout_success(context){
            return {
                title: "Au revoir",
                message: "Votre session a été cloturée",
                buttons:[
                    {
                        highlight: true,
                        label: "S'identifier",
                        handle: _ => location.href = "/#/login"
                    }
                ]
            }
        },
        error_401(context){
            return {
                title: "Erreur",
                message: "Votre session est expirée",
                buttons:[
                    {
                        highlight: true,
                        label: "S'identifier",
                        handle: _ => location.href = "/#/login"
                    }
                ]
            }
        },
        error(context){
            return {
                title: "Erreur",
                message: "Une erreur est survenue lors de la communication avec le serveur",
                buttons:[
                    {
                        highlight: true,
                        label: "Continuer",
                        handle: _ => context.dialog = null
                    }
                ]
            }
        },
        login_error(context){
            return {
                title: "Erreur",
                message: "Une erreur est survenue lors de la communication avec le serveur",
                buttons:[
                    {
                        highlight: true,
                        label: "Continuer",
                        handle: _ => context.dialog = null
                    }
                ]
            }
        },
        login_success(context){
            return {
                title: "Féliciation !",
                message: "Vous êtes maintenant connecté",
                buttons:[
                    {
                        highlight: true,
                        label: "Continuer",
                        handle: _ => context.dialog = null
                    }
                ]
            }
        },
        register_success(context){
            return {
                title: "Féliciation !",
                message: "Vous êtes maintenant enregistré",
                buttons:[
                    {
                        highlight: true,
                        label: "Continuer",
                        handle: _ => context.dialog = null
                    }
                ]
            }
        },
        register_error(context){
            return {
                title: "Erreur",
                message: "Une erreur est survenue lors de la communication avec le serveur",
                buttons:[
                    {
                        highlight: true,
                        label: "Continuer",
                        handle: _ => context.dialog = null
                    }
                ]
            }
        },
        hash_success(context){
            return {
                title: "Résultat",
                message: "",
                buttons:[
                    {
                        highlight: true,
                        label: "Continuer",
                        handle: _ => context.dialog = null
                    }
                ]
            }
        },
    }
}

export default config