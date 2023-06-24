export class registerPage{

    constructor (page){ 
        this.page=page
        this.fname= page.locator('#firstname')
        this.lname= page.locator('#lastname')
        this.username= page.locator('#userName')
        this.password= page.locator('#password')
        this.registerBtn= page.locator('#register')
        this.BackTOLoginBtn=page.locator('#gotologin')
    }

    async Enterfname(FirstName){
        await this.fname.fill('FirstName')
    }



    async Enterlname (LastName){
        await this.lname.fill('LastName')
    }

    async Enterusername (Username){
        await this.username.fill('Username')
    }

    async Enterpassword (Password){
        await this.password.fill('Password')
    }

    async BackToLogin(){
        await this.BackTOLoginBtn.click()
    }

    async registerButton() {
        await this.registerBtn.click()
    }
}