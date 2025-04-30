import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import Button from 'primevue/button';
import Stepper from 'primevue/stepper';
import StepItem from 'primevue/stepitem';
import Step from 'primevue/step';
import StepPanel from 'primevue/steppanel';
import StepList from 'primevue/steplist';
import './style.css'


const app = createApp(App)
// const app = createApp({ render: () => h(App, props) })
app.use(PrimeVue,{
    theme: "none",
    unstyled: true,
    // theme: {
    //     preset: Aura,
    //     options: {
    //         cssLayer: {
    //             name: "primevue",
    //             order: "base, primevue"
    //         },
    //     }
    // }
})
app.component('Step', Step);
app.component('StepItem', StepItem);
app.component('Stepper', Stepper);
app.component('StepList', StepList);
app.component('StepPanel', StepPanel);
app.component('Button', Button)
app.mount('#app')
