import { BasePage } from "./basePage";
import { By } from "selenium-webdriver";

export class Luma extends BasePage {
  subBtn: By = By.xpath(
    "/form[@id=newsletter-validate-detail]/div[2]/button/span"
  );
  email: By = By.xpath('//*[@id="newsletter"]');
  reviewBtn: By = By.xpath(
    ' //*[@id="maincontent"]/div[3]/div/div[2]/div[3]/div/div/ol/li[6]/div/div/div[1]/div[2]/a'
  );
  fiveStarBtn: By = By.xpath('//*[@id="Rating_5_label"]');
  nickname: By = By.xpath('//*[@id="nickname_field"]');
  summary: By = By.xpath('//*[@id="summary_field"]');
  review: By = By.xpath('//*[@id="review_field"]');
  submitReviewBtn: By = By.xpath('//*[@id="review-form"]/div/div/button');
  teeBtn: By = By.xpath(
    '//*[@id="maincontent"]/div[3]/div/div[2]/div[3]/div/div/ol/li[1]'
  );
  xsBtn: By = By.xpath('//*[@id="option-label-size-143-item-166"]');
  pinkBtn: By = By.xpath('//*[@id="option-label-color-93-item-57"]');
  quantity: By = By.xpath('//*[@id="qty"]');
  addCartBtn: By = By.xpath('//*[@id="product-addtocart-button"]');
  reviewConfirm: By = By.xpath('//*[@id="maincontent"]/div[1]/div[2]/div/div');
  cartConfirm: By = By.xpath(
    '//*[@id="maincontent"]/div[1]/div[2]/div/div/div'
  );
  cartError: By = By.xpath('//*[@id="super_attribute[93]-error"]');
  subConfirm: By = By.xpath('//*[@id="maincontent"]/div[2]/div[2]/div/div/div');
  subError: By = By.xpath('//*[@id="newsletter-error"]');
  constructor() {
    super({ url: "https://magento.softwaretestingboard.com/" });
  }
}
