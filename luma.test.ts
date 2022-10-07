import {pageObjects} from "./pageObjects";

const Luma = new Luma();

test("Review form functionality", async () => {
  await Luma.navigate()
  await Luma.click(Luma.reviewBtn)
  await Luma.click(Luma.fiveStarBtn)
  await Luma.findElement(Luma.nickname).sendKeys("Aisha")
  await Luma.findElement(Luma.summary).sendKeys("I love this tee!")
  await Luma.findElement(Luma.review).sendKeys("Fits amazing and the color is beautiful!")
  await Luma.click(Luma.reviewBtn)
  let response = await Luma.getText(Luma.reviewConfirm)
  expect(response).toBe('You submitted your review for moderation.')
});


test("Review added to cart success message", async () => {
    await Luma.click(Luma.teeBtn)
    await Luma.click(Luma.xsBtn)
    await Luma.click(Luma.pinkBtn)
    await Luma.findElement(Luma.quantity).sendKeys("1")
    await Luma.click(Luma.addCartBtn)
    let response = await Luma.getText(Luma.cartConfirm)
    expect(response).toBe('You added Radiant Tee to your shopping cart.')
    
});

test("Review whether cart criteria is being fulfilled", async () => {
    await Luma.click(Luma.teeBtn)
    await Luma.click(Luma.addCartBtn)
    let response = await Luma.getText(Luma.cartError)
    expect(response).toBe('This is a required field')
});

test("Review the subscription function", async () => {
  await Luma.findElement(Luma.email).sendKeys("Hello@gmail.com")  
  await Luma.click(Luma.subBtn)
  let response = await Luma.getText(Luma.subConfirm)
  expect(response).toBe('Thank you for your subscription')
  });


  test("Review the subscription criteria", async () => {
    await Luma.click(Luma.subBtn)
    let response = await Luma.getText(Luma.subError)
    expect(response).toBe('This is a required field.')
  });

afterAll(async () => {
  await Luma.driver.quit()
});