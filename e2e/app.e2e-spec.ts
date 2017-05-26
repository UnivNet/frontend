import { UnivNetPage } from './app.po';

describe('univ-net App', () => {
  let page: UnivNetPage;

  beforeEach(() => {
    page = new UnivNetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
