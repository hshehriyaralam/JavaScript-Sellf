class user {
    constructor(email, password, ){
        this.email = email
        this.password = password
    }
    // suppose main apne password ka access kisi ko dena hi nahi chahta 
    // iske lye kaise error denge 
    // uske lye use krte hian , getter and setter 
    // jitne bh properties hai unke nam se getter and setter as a method ban jate hain 
    get password(){
        return this._password.toUpperCase()
    }
    // error isi lye aya jam console tak gaye hi nh 
    // because jab get method use karenge to set method bh use hoga 
    // jab getter define kroge to  setter define krna hi hOga 
    set password(value){
        this._password = value
    }
    // constructor bh password set kr rha hai , getter and setter bh kr rha jabh error aa rha hai
    // set and get ke password ko uniq krna hoga 

    // ****** Email ******
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }


}

const app  = new user ("hshehriyaralam@gmail.com", "abchjo")
console.log(app.password);
console.log(app.email);




// Properties ke through setter  and getter 
// modern Syntaxt 
function User1(email, password){
    this._email  = email
    this._password = password

    Object.defineProperty(this, email, {
        get : function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })

    Object.defineProperty(this, password, {
        get: function(){
            return this._password.toUpperCase()
        },
        set : function(value){
            this._password = value
        }
    })
}

const Chai = new User1("Shahmeer", "shha")
console.log(Chai._email);
console.log(Chai._password);



// ******** getter & setter with Objects 
const User2 = {
    _email: "hshheriyar",
    _pasword : "2345553",
    get email(){
        return this._email.toUpperCase()
    }, 

    set email(value){
        this._email = value
    }
}

const Chai2 = Object.create(User2)
console.log(Chai2.email);
