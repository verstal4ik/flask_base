new Vue ({
	el: '#app',
	data: {
		title: "Hello from VUE",
		styleCSS: "",
	},
	methods: {
		changeText () {
			this.title = "Foo text"
		}
	}
});