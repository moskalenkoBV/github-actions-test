import { GithubActionsTestPage } from './app.po';

describe('github-actions-test App', function() {
  let page: GithubActionsTestPage;

  beforeEach(() => {
    page = new GithubActionsTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
