import HelloWorld from './components/HelloWorld.vue';

export { HelloWorld };

function install(Vue) {
  Vue.component('HelloWorld', HelloWorld);
}


export default { install };
