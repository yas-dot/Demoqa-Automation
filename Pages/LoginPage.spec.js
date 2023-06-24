export class LOginPage {

    constructor (page){ 
        this.page=page
        this.Username= page.getByPlaceholder('UserName')
        this.Password= page.getByPlaceholder('Password')
        this.LoginBtn= page.locator('#login')
        this.NewUserBtn= page.locator('#newUser')
        this.PopupCancel= page.locator('#newUser')
        this.Popupconfirm= page.locator('#newUser')

        // this.loginBtn= page.getByPlaceholder('')
    }

        async login(Username,Password){
            await this.Username.fill(Username)
            await this.Password.fill(Password)
            await this.LoginBtn.click()
        }

        async GotoLoginPage(){
            await this.page.goto('https://demoqa.com/login');

        }
        async PopupCancelBtn(){
            await this.PopupCancel.click()
        }

        async PopupconfirmBtn(){
            await this.Popupconfirm.click()
        }

        async NewUser(){
            await this.NewUserBtn.click()
        }
}