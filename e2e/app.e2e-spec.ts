import { WikisearchPage } from './app.po';

describe('wikisearch App', function() {
  let page: WikisearchPage;

  beforeEach(() => {
    page = new WikisearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
