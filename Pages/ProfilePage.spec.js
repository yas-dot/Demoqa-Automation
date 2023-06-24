import { selectors } from "@playwright/test"

export class Profile {

    constructor (page){ 
        this.page=page
        this.LogOutBtn= page.locator("text='Log out'")
        this.searchBox= page.locator('#searchBox')
        this.deletebook=page.locator('//span[@id="delete-record-undefined"])[1]')
        this.Popupconfirm=page.locator('#closeSmallModal-ok')
        this.Popupcancel=page.locator('#closeSmallModal-cancel')
        this.Popupclose=page.locator('span[aria-hidden="true"]')
        this.Bookstor=page.locator('#gotoStore')
        this.Deletallbtn=page.locator('(//button[@id="submit"])[2]')    

        // this.loginBtn= page.getByPlaceholder('')
    }


        async ClickLogoutBtn(){
            await this.LogOutBtn.click()
        }

        async Entersearch(EnterValue){
            await this.searchBox.fill(EnterValue)
        }
        
        async ClickdeleteBtn(){
            await this.deletebook.click()
        }
        
        async ClickConfirmBtn(){
            await this.Popupconfirm.click()
        }

        async ClickCancelBtn(){
            await this.Popupcancel.click()
        }
        async ClosePopup(){
            await this.Popupclose.click()
        }

        async GotoBookStore(){
            await this.Bookstor.click()
        }

        async ClickDeletAllBtn(){
            await this.Deletallbtn.click()
        }


    }