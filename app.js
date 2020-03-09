var app = new Vue({
	el: '#app',
	data: {
		number: 1,
		min:1,
		max:100,
	},
	methods:{
		getRandomInt() {
			max  = parseInt(this.max) +1
			return Math.random() * (max - this.min) + this.min;
		},
		clickHandler(){
			let changeAnimation =  setInterval(()=>{
				this.number = parseInt(this.getRandomInt())
			},50)

			setTimeout(()=>{
				clearInterval(changeAnimation)
				this.number = parseInt(this.getRandomInt())
			},2000)
			
		}
	}
  })