class Reset {
    constructor(username, newpassword, oldpassword){
        this.username = username;
        this.newpassword = newpassword;
        this.oldpassword = oldpassword
    }
    change( username, newpassword, oldpassword){
        if(this.oldpassword !== oldpassword){
            console.log("Please input a correct password");
        }else{
            this.oldpassword = newpassword;
            console.log(`Welcome ${this.username}, Password has succesfully been reset`)
        }
    }
}

const login = new Reset ("Macsunny", "2345", "1234");

login.change("Macsunny", "2345", "123");

console.log(login)