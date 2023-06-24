export class BookstorePage{

    constructor (page){ 
        this.page=page
        this.booklink=page.locator('//span[@id="see-book-Git Pocket Guide"]//a')
        this.addtobook=page.locator("text='Add To Your Collection'")
        this.searchBox= page.locator('#searchBox')
        this.NextBtn=page.locator('//button[text()="Next"]')
        this.PreviousBtn=page.locator('//button[text()="Previous"]')
        
    }

    async BookLinks(){
        this.booklink.click()
    }
    async AddtoCollection(){
        this.addtobook.click()
    }

    async Entersearch(EnterValue){
        await this.searchBox.fill(EnterValue)
    }

    async clickNextBtn(){
        await this.NextBtn.click()
    }
    async clickPreviousBtn(){
        await this.PreviousBtn.click()
    }
}