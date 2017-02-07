import { FleetPage } from './app.po';

describe('fleet App', function() {
  let page: FleetPage;

  beforeEach(() => {
    page = new FleetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
