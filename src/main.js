import { createApp } from 'vue';
import App from './App';
import router from '@/router/router';
import store from '@/store/';
import directives from '@/directives/';

import components from '@/components/UI';

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

app.use(router).use(store).mount('#app');
