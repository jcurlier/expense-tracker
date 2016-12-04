import { ExpenseTrackerWebPage } from './app.po';

describe('expense-tracker-web App', function() {
  let page: ExpenseTrackerWebPage;

  beforeEach(() => {
    page = new ExpenseTrackerWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
