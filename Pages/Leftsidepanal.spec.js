export class Lesftsidepanal{

    constructor (page){ 
        this.page=page
        this.Profile=page.locator('(//li[@id="item-3"])[5]')
        this.login=page.locator('(//li[@id="item-0"])[6]')
        this.Bookstore=page.locator('(//li[@id="item-2"])[5]')
        this.BookStoreApi=page.locator('(//li[@id="item-4"])[5]')
       
    }

    async clickProfileMenu(){
        await this.Profile.click()
    }
    async clickloginMenu(){
        await this.login.click()
    }
    async clickbookstore(){
        await  this.Bookstore.click()
    }
    async clickBookstoreAPI(){
        await this.BookStoreApi.click
    }
}