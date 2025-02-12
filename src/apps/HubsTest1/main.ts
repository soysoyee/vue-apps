import WebAppProto from "../WebApp";
import App from './App.vue'
import {data as SharedData, Store} from "./shared"

class WebApp extends WebAppProto {
    shared: Store

    constructor () {
        super(App, 400, 475)

        // create our shared data object that will
        // share data between vue and hubs
        this.shared = new Store(this)
        this.vueApp.provide('shared', this.shared)

        console.log (JSON.stringify(this.shared.state))
    }
}

let app = new WebApp()
app.mount()

app.vueRoot!.$el.style.border = "solid 0.1em"