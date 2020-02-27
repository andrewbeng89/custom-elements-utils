export default ({ element, name }) => ({
  define: () => customElements.define(name, element),
  useWith: {
    Vue: (Vue) => {
      Vue.config.ignoredElements = Vue.config.ignoredElements
        ? Vue.config.ignoredElements.push(name)
        : [name]
      return Vue;
    }
  }
});
