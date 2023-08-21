class Authentication {
    constructor(username, password){
        this.password = password;
        this.username = username
    }
    login(username, password){
        if(this.username !== username){
            console.log("incorrect usename");
        }else if(this.password !== password){
            console.log("incorrect password")
        }else{
            console.log(` Welcome ${this.username}, login succesful`);
        }
    }

    reset(newpassword, oldpassword){
        if(this.password !== oldpassword){
            console.log("please input a correct password");
        }else{
            this.password = newpassword;
            console.log(`password has succesfully been reset`)
        }
    }

}

const user = new Authentication("macsunny", "1234");

// user.login("macsunny", "1234")

user.reset("12345", "1234");
user.login("macsunny","1234")
// console.log(user)


//implement password reset function