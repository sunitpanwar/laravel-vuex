import Home from './components/Home.vue';
import Features from './components/Features.vue';
import Contact from './components/Contact.vue';
export const routes = [
    { path: '/', component: Home, name: 'Home' },
    { path: '/features', component: Features, name: 'Features' },
    { path: '/contact', component: Contact, name: 'Contact' },
];