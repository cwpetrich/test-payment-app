import { TestPaymentAppPage } from './app.po';

describe('test-payment-app App', () => {
  let page: TestPaymentAppPage;

  beforeEach(() => {
    page = new TestPaymentAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
