// @ts-check
const { test, expect } = require('@playwright/test');
import { LOginPage } from '../Pages/LoginPage.spec';
import { registerPage } from '../Pages/RegisterPage.spec';
import { Profile } from '../Pages/ProfilePage.spec';
import { BookstorePage } from '../Pages/Bookstore.spec';
import { Lesftsidepanal } from '../Pages/Leftsidepanal.spec';

test('LOGIN-FUN-01	Verify login page is displayed',async({page})=>{

    const Login = new LOginPage(page)
    await Login.GotoLoginPage()
    await expect(page).toHaveTitle('DEMOQA');
    await expect(page).toHaveURL('https://demoqa.com/login');  // validate webpage and browser launched
})

test('LOGIN-FUN-02	Verify user name, Password and login button is present.',async({page})=>{

    const Login = new LOginPage(page)
    await Login.GotoLoginPage()
    await expect(page).toHaveTitle('DEMOQA');
    await expect(page).toHaveURL('https://demoqa.com/login');
    await page.isVisible('#userName')    // validate user name, password and login button available.
    await page.isVisible('#password')
    await page.isVisible('login') 
    

})

test('LOGIN-FUN-03	Verify User can able to login with valid credentials',async({page})=>{
   const Login = new LOginPage(page)
    await Login.GotoLoginPage()
    page.waitForTimeout(3000)
    await expect(page).toHaveTitle('DEMOQA');
    await expect(page).toHaveURL('https://demoqa.com/login');
    await Login.login('Qatester989', 'Password@1')
    await expect(page.locator('div[class="main-header"]')).toHaveText('Profile');   // Validate valid login with valid credentilas

})

test('LOGIN-FUN-04	Verify User can able to login with In-valid credentials', async({page})=>{

  const Login = new LOginPage(page)
    await Login.GotoLoginPage()
    page.waitForTimeout(3000)
    await expect(page).toHaveTitle('DEMOQA');
    await expect(page).toHaveURL('https://demoqa.com/login');
    await Login.login('Qatester9891', 'Password@1')
    await expect(page.locator('#name')).toHaveText('Invalid username or password!'); // trying to login with invalid login and verify alert message

})

test('LOGIN-FUN-05	Verify New User button available in the page',async({page})=>{

  const Login = new LOginPage(page)
    await Login.GotoLoginPage()
    page.waitForTimeout(3000)
    await page.isVisible('#newUser')  // Validate new user button available

})


test('LOGIN-FUN-06	Click New user buton and verify Register page is available',async({page})=>{

  const Login = new LOginPage(page)
    await Login.GotoLoginPage()
    page.waitForTimeout(3000)
    await Login.NewUser()
    await expect(page.locator('div[class="main-header"]')).toHaveText('Register'); // validate new user button functionality in login page.

})

test('LOGIN-FUN-07: Click Login button  without enter credentials', async ({ page }) => {
  const Login = new LOginPage(page)
    await Login.GotoLoginPage()
    page.waitForTimeout(3000)
    await expect(page).toHaveTitle('DEMOQA');
    await expect(page).toHaveURL('https://demoqa.com/login');
    await Login.login('', '')
    await page.isVisible('input[class="mr-sm-2 is-invalid form-control"]'); // Trying to login without user name and password

});

test('LOGIN-FUN-08: Click Login button  without enter user name', async ({ page }) => {
  const Login = new LOginPage(page)
    await Login.GotoLoginPage()
    page.waitForTimeout(3000)
    await expect(page).toHaveTitle('DEMOQA');
    await expect(page).toHaveURL('https://demoqa.com/login');
    await Login.login('', 'Password@1')
    await page.isVisible('input[class="mr-sm-2 is-invalid form-control"]');  // trying to login without user name ans validate alert message
});

test('LOGIN-FUN-09: Click Login button  without enter Password', async ({ page }) => {
  const Login = new LOginPage(page)
    await Login.GotoLoginPage()
    await expect(page).toHaveTitle('DEMOQA');
    await expect(page).toHaveURL('https://demoqa.com/login');
    await Login.login('', 'Password@1')
    await page.isVisible('input[class="mr-sm-2 is-invalid form-control"]');    // trying to login without password ans validate alert message
});

test('LOGIN-10: click Login menu after login',async({page})=>{
  const Login = new LOginPage(page)
  const leftmenu=new Lesftsidepanal(page)
    await Login.GotoLoginPage()
    page.waitForTimeout(3000)
    await expect(page).toHaveTitle('DEMOQA');
    await expect(page).toHaveURL('https://demoqa.com/login');
    await Login.login('Qatester9891', 'Password@1')
    await leftmenu.clickloginMenu()
    await expect(page.locator('//label[@id="loading-label"]//a')).toHaveText('profile')  // Click login menu after login with valid credentials and verify logout button present
    await page.isVisible('#submit')

})

test('LOGIN-FUN-11: Login with valid credentilas and verify logout functionality',async({page})=>{

  const Login = new LOginPage(page)
  const profile = new Profile(page)
    await Login.GotoLoginPage()
    page.waitForTimeout(3000)
    await expect(page).toHaveTitle('DEMOQA');
    await expect(page).toHaveURL('https://demoqa.com/login');
    await Login.login('Qatester989', 'Password@1')
    await expect(page.locator('div[class="main-header"]')).toHaveText('Profile');
    await profile.ClickLogoutBtn()
    await expect(page.locator('div[class="main-header"]')).toHaveText('Login');   // validate logout button function.
})


test('PROFILE-FUN-01: View Profile page without login',async({page})=>{
  const Login = new LOginPage(page)
  const lPanal = new Lesftsidepanal(page)
    await Login.GotoLoginPage()
    page.waitForTimeout(3000)
    await expect(page).toHaveTitle('DEMOQA');
    await expect(page).toHaveURL('https://demoqa.com/login');
    await lPanal.clickProfileMenu()
    await expect(page.locator('.main-header')).toHaveText('Profile') // Validate view profile page  available without login 
})

test('PROFILE-FUN_02 Click login button and verify Login page is available',async({page})=>{

    const Login = new LOginPage(page)
    await Login.GotoLoginPage()
    page.waitForTimeout(3000)
    await expect(page).toHaveTitle('DEMOQA');
    await expect(page).toHaveURL('https://demoqa.com/login');
    await Login.login('Qatester989', 'Password@1')
    await expect(page.locator('div[class="main-header"]')).toHaveText('Profile'); // validate profile page available after login with valid credetntials.

})

test('PROFILE-03: select 5 from dropdown',async({page})=>{  // select 5 from dropdown and validate 5 rows only available
  const Login = new LOginPage(page)
  const profile = new Profile(page)
  const dropdown = await page.$('select[aria-label="rows per page"]');

    await Login.GotoLoginPage()
    page.waitForTimeout(3000)
    await expect(page).toHaveURL('https://demoqa.com/login');
    await expect(page).toHaveTitle('DEMOQA');
    await Login.login('Qatester989', 'Password@1')    
    await profile.Entersearch('Git Pocket Guide')
    await page.locator('select[aria-label="rows per page"]').selectOption({value:'5'});

    const selector = '.rt-tr-group';
    const elementCount = await page.$$eval(selector, rows => rows.length);
    console.log('The number of elements is: ', elementCount);
    if(elementCount >=5){
      console.log("completed")
    }else{
      console.log("Not completed")
    }

})

test('PROFILE-04: select 10 from dropdown',async({page})=>{  //select 10 from dropdown and validate 10 rows only available
  const Login = new LOginPage(page)
  const profile = new Profile(page)
  const dropdown = await page.$('select[aria-label="rows per page"]');

    await Login.GotoLoginPage()
    page.waitForTimeout(3000)
    await expect(page).toHaveURL('https://demoqa.com/login');
    await expect(page).toHaveTitle('DEMOQA');
    await Login.login('Qatester989', 'Password@1')    
    await profile.Entersearch('Git Pocket Guide')

    await page.locator('select[aria-label="rows per page"]').selectOption({value:'10'});

    const selector = '.rt-tr-group';
    const elementCount = await page.$$eval(selector, rows => rows.length);
    console.log('The number of elements is: ', elementCount);
    if(elementCount >=10){
      console.log("completed")
    }else{
      console.log("Not completed")
    }

  })

test('PROFILE-05: select 20 from dropdown',async({page})=>{  //select 15 from dropdown and validate 15 rows only available
  const Login = new LOginPage(page)
  const profile = new Profile(page)
  const dropdown = await page.$('select[aria-label="rows per page"]');

    await Login.GotoLoginPage()
    page.waitForTimeout(3000)
    await expect(page).toHaveURL('https://demoqa.com/login');
    await expect(page).toHaveTitle('DEMOQA');
    await Login.login('Qatester989', 'Password@1')      
    
    await page.locator('select[aria-label="rows per page"]').selectOption({value:'20'});

    const selector = '.rt-tr-group';
    const elementCount = await page.$$eval(selector, rows => rows.length);
    console.log('The number of elements is: ', elementCount);
    if(elementCount >=20){
      console.log("completed")
    }else{
      console.log("Not completed")
    }

  })

test('PROFILE-06: select 25 from dropdown',async({page})=>{   //select 25 from dropdown and validate 25 rows only available
   const Login = new LOginPage(page)
   const profile = new Profile(page)
   const dropdown = await page.$('select[aria-label="rows per page"]');
  
      await Login.GotoLoginPage()
    page.waitForTimeout(3000)
    await expect(page).toHaveURL('https://demoqa.com/login');
      await expect(page).toHaveTitle('DEMOQA');
      await Login.login('Qatester989', 'Password@1')    
      
      await page.locator('select[aria-label="rows per page"]').selectOption({value:'25'});
  
      const selector = '.rt-tr-group';
      const elementCount = await page.$$eval(selector, rows => rows.length);
      console.log('The number of elements is: ', elementCount);
      if(elementCount >=25){
        console.log("completed")
      }else{
        console.log("Not completed")
      }
  
    })


test('PROFILE-07: select 50 from dropdown',async({page})=>{   //select 50 from dropdown and validate 50 rows only available
   const Login = new LOginPage(page)
   const profile = new Profile(page)
   const dropdown = await page.$('select[aria-label="rows per page"]');
    
    await Login.GotoLoginPage()
    page.waitForTimeout(3000)
    await expect(page).toHaveURL('https://demoqa.com/login');
    await expect(page).toHaveTitle('DEMOQA');
    await Login.login('Qatester989', 'Password@1')    
      
     await page.locator('select[aria-label="rows per page"]').selectOption({value:'50'});
    
     const selector = '.rt-tr-group';
     const elementCount = await page.$$eval(selector, rows => rows.length);
     console.log('The number of elements is: ', elementCount);
     if(elementCount >=50){
        console.log("completed")
     }else{
        console.log("Not completed")
     }
    
 })


test('PROFILE-08: select 100 from dropdown ',async({page})=>{    //select 100 from dropdown and validate 100 rows only available
    const Login = new LOginPage(page) 
    const profile = new Profile(page)
    const dropdown = await page.$('select[aria-label="rows per page"]');
    
      await Login.GotoLoginPage()
    page.waitForTimeout(3000)
    await expect(page).toHaveURL('https://demoqa.com/login');
      await expect(page).toHaveTitle('DEMOQA');
      await Login.login('Qatester989', 'Password@1')    
     
      await page.locator('select[aria-label="rows per page"]').selectOption({value:'100'});
  
      const selector = '.rt-tr-group';
      const elementCount = await page.$$eval(selector, rows => rows.length);
      console.log('The number of elements is: ', elementCount);
      if(elementCount >=100){
        console.log("completed")
      }else{
        console.log("Not completed")
      }
})

test('PROFILE-09: Add new book in collection ',async({page})=>{   // Add new book collection
  const Login = new LOginPage(page)
  const profile = new Profile(page)
  const BookStore = new BookstorePage(page)
  
    await Login.GotoLoginPage()
    page.waitForTimeout(3000)
    await expect(page).toHaveURL('https://demoqa.com/login');
    await expect(page).toHaveTitle('DEMOQA');
    await Login.login('Qatester989', 'Password@1')  
    await profile.GotoBookStore()
    await expect(page.locator('.main-header')).toHaveText('Book Store')
    await BookStore.BookLinks()
    await page.waitForTimeout(2000);
    await BookStore.AddtoCollection()
    await page.goto('https://demoqa.com/profile')
    await expect(page.locator('//span[@id="see-book-Learning JavaScript Design Patterns"]//a')).toHaveText('Learning JavaScript Design Patterns')
    console.log('Book added to collection')
    
})
 
test('PROFILE-10: click delete button but cancel the process ',async({page})=>{    // delet the book but cancel the process
  const Login = new LOginPage(page)
  const profile = new Profile(page)
  const dropdown = await page.$('select[aria-label="rows per page"]');
  
    await Login.GotoLoginPage()
    page.waitForTimeout(3000)
    await expect(page).toHaveURL('https://demoqa.com/login');
    await expect(page).toHaveTitle('DEMOQA');
    await Login.login('Qatester989', 'Password@1')  
    await page.locator('(//span[@id="delete-record-undefined"])[1]').click();

    await page.isVisible('.modal-content')
    await profile.ClickCancelBtn()   // cancel the process
})

test('PROFILE-11: click delete button but confirm the process ',async({page})=>{  //delete the book and confirm the popup
  const Login = new LOginPage(page)
  const profile = new Profile(page)
  const dropdown = await page.$('select[aria-label="rows per page"]');
  
    await Login.GotoLoginPage()
    page.waitForTimeout(3000)
    await expect(page).toHaveURL('https://demoqa.com/login');
    await expect(page).toHaveTitle('DEMOQA');
    await Login.login('Qatester989', 'Password@1')  
    await page.locator('(//span[@id="delete-record-undefined"])[1]').click();

    await page.isVisible('.modal-content')
    // await profile.ClickConfirmBtn()
    await page.locator('span[aria-hidden="true"]').click()
    await page.locator('#closeSmallModal-ok').click(); // confirm the popup
})


test('PROFILE-12: click delete button but Close the popup ',async({page})=>{  // close the poup
  const Login = new LOginPage(page)
  const profile = new Profile(page)
  const dropdown = await page.$('select[aria-label="rows per page"]');
  
    await Login.GotoLoginPage()
    page.waitForTimeout(3000)
    await expect(page).toHaveURL('https://demoqa.com/login');
    await expect(page).toHaveTitle('DEMOQA');
    await Login.login('Qatester989', 'Password@1')  
    await page.locator('(//span[@id="delete-record-undefined"])[1]').click();

    await page.isVisible('.modal-content')
    // await profile.ClickConfirmBtn()
    await profile.ClosePopup() // close the popup
})

test('PROFILE-13: search with invalid data',async({page})=>{
  const Login = new LOginPage(page)
  const profile = new Profile(page)
    await Login.GotoLoginPage()
    page.waitForTimeout(3000)
    await expect(page).toHaveURL('https://demoqa.com/login');
    await expect(page).toHaveTitle('DEMOQA');
    await Login.login('Qatester989', 'Password@1')    
    profile.Entersearch('invalid')
    await expect(page.locator('.rt-noData')).toHaveText('No rows found')  // search with invalid dataand validate no row data alert message available

})
test('PROFILE-14: select 5 from dropdown previous and next button should be disabled when only one page ',async({page})=>{
  const Login = new LOginPage(page)
  const profile = new Profile(page)
  const dropdown = await page.$('select[aria-label="rows per page"]');
  
    await Login.GotoLoginPage()
  page.waitForTimeout(3000)
  await expect(page).toHaveURL('https://demoqa.com/login');
    await expect(page).toHaveTitle('DEMOQA');
    await Login.login('Qatester989', 'Password@1')    
   
    await page.locator('select[aria-label="rows per page"]').selectOption({value:'5'});

    const selector = '.rt-tr-group';
    const elementCount = await page.$$eval(selector, rows => rows.length);
    console.log('The number of elements is: ', elementCount);
    if(elementCount >=5){
      console.log("completed")
    }else{
      console.log("Not completed")
    }
  await page.isDisabled('//button[text()="Previous"]')
  await page.isDisabled('//button[text()="Next"]')   // validate next button in the data table is dsiabled when no data or only one page available
})

test('PROFILE-FUN-15: Delete all book from page',async({page})=>{
  const Login = new LOginPage(page)
  const profile = new Profile(page)
    await Login.GotoLoginPage()
    page.waitForTimeout(3000)
    await expect(page).toHaveURL('https://demoqa.com/login');
    await expect(page).toHaveTitle('DEMOQA');
    await Login.login('Qatester989', 'Password@1')
    await profile.ClickDeletAllBtn()
    await profile.ClickCancelBtn()  // delete all book but cancel the process

})

test('BS-FUN-01: Verify book store page is available', async({page})=>{
  const Login = new LOginPage(page)
  const BSPage = new BookstorePage(page)
  const lpanal = new Lesftsidepanal(page)
  await Login.GotoLoginPage()
  page.waitForTimeout(3000)
  await expect(page).toHaveURL('https://demoqa.com/login');
  await expect(page).toHaveTitle('DEMOQA');
  await Login.login('Qatester989', 'Password@1')
  await lpanal.clickbookstore()
  //logout button should present
  await page.isVisible('#submit'); // login and verify book storepage and logout button available
})

test('BS-FUN-02: View Book store page without login',async({page})=>{
  const Login = new LOginPage(page)
  const BSPage = new BookstorePage(page)
  const lpanal = new Lesftsidepanal(page)
  await Login.GotoLoginPage()
  page.waitForTimeout(3000)
  await expect(page).toHaveURL('https://demoqa.com/login');
  await expect(page).toHaveTitle('DEMOQA');  
  await lpanal.clickbookstore()
  await page.isVisible('#login') // View book store without login and validate login button is available.
})
test('BS-FUN-03: search with invalid data Book store page',async({page})=>{
    const Login = new LOginPage(page)
    const profile = new Profile(page)
    const lpanal = new Lesftsidepanal(page)
    const BS = new BookstorePage()
      await Login.GotoLoginPage()
      page.waitForTimeout(3000)
      await expect(page).toHaveURL('https://demoqa.com/login');
      await expect(page).toHaveTitle('DEMOQA');
      await Login.login('Qatester989', 'Password@1')    
      await BS.Entersearch('Invalid')
      await expect(page.locator('.rt-noData')).toHaveText('No rows found')  //search with invalid data
  })

test('BS-FUN-10: select 5 from dropdown  and validate next button Book store page',async({page})=>{
    const Login = new LOginPage(page)
    const lpanal = new Lesftsidepanal(page)
    const profile = new Profile(page)
    const BS = new BookstorePage()
    const dropdown = await page.$('select[aria-label="rows per page"]');
    
    await Login.GotoLoginPage()
    page.waitForTimeout(3000)
    await expect(page).toHaveURL('https://demoqa.com/login');
      await expect(page).toHaveTitle('DEMOQA');
      await Login.login('Qatester989', 'Password@1')    
      await lpanal.clickbookstore()
      await page.locator('select[aria-label="rows per page"]').selectOption({value:'5'});
      const selector = '.rt-tr-group';
      const elementCount = await page.$$eval(selector, rows => rows.length);
      console.log('The number of elements is: ', elementCount);
        if(elementCount >=100){
          console.log("completed")
        }else{
          console.log("Not completed")
        }
      await BS.clickNextBtn()
      await page.isVisible('input[value="2"]')  // select 5 from dropdown and click next button and validate now we are on page number 2
})
  
  
test('BS-FUN-11: select 5 from dropdown  and validate next button and click previouse button Book store page',async({page})=>{
      const Login = new LOginPage(page)
      const lpanal = new Lesftsidepanal(page)
      const profile = new Profile(page)
      const BS = new BookstorePage(page)
      const dropdown = await page.$('select[aria-label="rows per page"]');
      
      await Login.GotoLoginPage()
      page.waitForTimeout(3000)
      await expect(page).toHaveURL('https://demoqa.com/login');
        await expect(page).toHaveTitle('DEMOQA');
        await Login.login('Qatester989', 'Password@1')    
        await lpanal.clickbookstore()
        await page.locator('select[aria-label="rows per page"]').selectOption({value:'5'});
        const selector = '.rt-tr-group';
        const elementCount = await page.$$eval(selector, rows => rows.length);
        console.log('The number of elements is: ', elementCount);
          if(elementCount >=5){
            console.log("completed")
          }else{
            console.log("Not completed")
          }
        await BS.clickNextBtn()
        await page.isVisible('input[value="2"]');
        await BS.clickPreviousBtn()   // select 5 from dropdown and click next button and validate now we are on page number 2 and back to page 1 using previous button
        await page.isVisible('input[value="1"]'); 
 })
 
test('REG-FUN-01: Click new user button and verify register page available', async ({ page }) => {
  const Login = new LOginPage(page)
    await Login.GotoLoginPage()
    page.waitForTimeout(3000)
    await expect(page).toHaveTitle('DEMOQA');
    await expect(page).toHaveURL('https://demoqa.com/login');
    await Login.NewUser()
    await expect(page.locator('div[class="main-header"]')).toHaveText('Register');  // verify register page is available

});

test('REG-FUN-02: Without Enter requierd field click register button', async ({ page }) => {
  const Login = new LOginPage(page)
  const register = new registerPage(page)
    await Login.GotoLoginPage()
    page.waitForTimeout(3000)
    await expect(page).toHaveTitle('DEMOQA');
    await expect(page).toHaveURL('https://demoqa.com/login');
    await Login.NewUser()
    await expect(page.locator('div[class="main-header"]')).toHaveText('Register');
    await register.registerButton()
    await page.isVisible('input[class="mr-sm-2 is-invalid form-control"]') // create user without enter details

});

test('REG-FUN-03: Enter All required field and click register button',async ({page})=>{

  const Login = new LOginPage(page)
  const register = new registerPage(page)
    await Login.GotoLoginPage()
    page.waitForTimeout(3000)
    await expect(page).toHaveTitle('DEMOQA');
    await expect(page).toHaveURL('https://demoqa.com/login');
    await Login.NewUser()
    await expect(page.locator('div[class="main-header"]')).toHaveText('Register');
    await register.Enterfname('tester')
    await register.Enterlname('QA')
    await register.Enterusername('TesterQA')
    await register.Enterpassword('Password@1')
    await register.registerButton()
    await expect(page.locator('#name')).toHaveText('Please verify reCaptcha to register!')  // enter all filed and verify alert mesaage.

})

test('REG-FUN-04: Click Back to Login and verify login page is displayed',async({page})=>{

  const Login = new LOginPage(page)
  const register = new registerPage(page)
    await Login.GotoLoginPage()
    page.waitForTimeout(3000)
    await expect(page).toHaveURL('https://demoqa.com/login');
    await expect(page).toHaveTitle('DEMOQA');
    await Login.NewUser()
    await expect(page.locator('div[class="main-header"]')).toHaveText('Register');
    await register.BackToLogin()
    await expect(page.locator('div[class="main-header"]')).toHaveText('Login'); // click back to login button and verify login page is displayed
})
