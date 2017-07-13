Vue.component('book-result', {
  props: ['book'],
  template: '<li><a :href="book.url">{{ book.title }}</a></li>'
})

var app = new Vue({
  el: '#app',
  data: {
    seen: true,
    query: "",
    results: [
      { id: 1, title: 'Title 1', url: '#'},
      { id: 2, title: 'Title 2', url: '#'}
    ]
  },
  methods: {
    clear: function () {
      this.query = ""
    }
  }
})
