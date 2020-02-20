module.exports = {
    mode: 'universal',
    modules: [
        "@nuxtjs/vuetify"
    ],
    
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        // 以下を追記
        { 
            src: '~/plugins/vue-full-calendar', 
            ssr: false 
        }
    ],
    vuetify: {
        theme: {
            primary: "#009688",
            secondary: "#80CBC4",
            accent: "#1565C0",
            error: "#f44336",
            warning: "#ffeb3b",
            info: "#2196f3",
            success: "#4caf50"
        }
    }
};