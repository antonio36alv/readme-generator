const axios = require("axios")
const api = {
  getUser : username => {
    const queryUrl = `https://api.github.com/users/${username}`
    axios.get(queryUrl).then(data => {
      
      data.data.email == null ? this.email = "Fill Email." : this.email = data.data.email
      this.img = data.data.avatar_url
      
      let user = {
        email : this.email,
        img : this.img
      }
      return user
    }
    )
  }
};
module.exports = api;