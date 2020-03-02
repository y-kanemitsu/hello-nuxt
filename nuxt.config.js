const { resolve } = require('path');
const itemsList = require('./assets/json/items.json');
const carendarsList = require('./assets/json/schedule.json')
// const iweee = require('./iweee.config.json');

import axios from 'axios';
export default {
    mode: "spa",
    modules: [
        "@nuxtjs/vuetify"
    ],

    /*
    ** Headers of the page
    */
    head: {
        title: "Delivery Management System",
        titleTemplate: "Delivery Management System | %s",
        meta: [
            { 
                charset: "utf-8" 
            },
            { 
                name: "viewport", 
                content: "width=device-width, initial-scale=1" 
            },
            {
                hid: "description",
                name: "description",
                content: "Delivery Management System"
            },
            { 
                rel: 'icon', 
                type: 'image/x-icon', 
                href: '/nuxt-sample/favicon.ico' 
            }
        ],
    },

    /*
    ** Global CSS
    */
    css: [
        { 
            src: 'material-design-lite/src/material-design-lite.scss', 
            lang: 'scss' 
        },
        { 
            src: 'typicons.font/src/font/typicons.css' 
        },
        {
            src: "@/assets/css/style.scss"
        }
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
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
    },
    loading: { color: '#3B8070' },
    build: {
      extend (config, ctx) {
        if (ctx.dev && ctx.isClient) {
          config.module.rules.push({
            enforce: 'pre',
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/
          })
        }
      },
      vendor: [ 'material-design-lite/material.min.js' ]
    },
    
    generate: {
        fallback: true,
        dir: resolve(__dirname, './dist' ),
        routes() {
            return itemsList.items.map(item => {
                return `items/${item.id}`
            })
        },
        routesSchedules() {
            return carendarsList.Schedule.map(Schedule => {
                return `schedules/${Schedule.id}`
            })
        }
    },

}