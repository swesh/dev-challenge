const App = require("../../site/App");
describe('Testing App', function() {
    it('App.init() should return App object when App is initialized', function() {
        const app = App.init();
        expect(app === App).toBe(true);
    });
    it('App.getLiveFeeds() should have been called', function() {
        spyOn(App,"getLiveFeeds");
        App.getLiveFeeds();
        expect(App.getLiveFeeds).toHaveBeenCalled();
    });
  });