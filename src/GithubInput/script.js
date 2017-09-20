import bus from '../bus'

export default {
  name: 'GithubInput',
   data() {
    return {
      username: '',
    }
  },
  methods: {
		onSubmit(event){
			console.log(this.username);
			if(this.username && this.username !==''){
				bus.$emit('new-username',this.username)
			}
			
		}
	}
  }
