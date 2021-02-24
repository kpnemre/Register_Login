
class Request {
    constructor() {
      this.url_login = "https://service.firsatbull.com.tr/api/Auth/login";
      this.url_register = "https://service.firsatbull.com.tr/api/Auth/register";
    }
  
    async register(data) {
      const response = await fetch(this.url_register, {
        method: "POST",
        mode: 'cors',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
      });
      const registerUser = await response.json();
      return registerUser;
    }
  
    async signin( data) {
      const response = await fetch(this.url_login, {
        method: "POST",
        mode: 'cors',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
      });
      const loginUser = await response.json();
      return loginUser;
    }
  }
  