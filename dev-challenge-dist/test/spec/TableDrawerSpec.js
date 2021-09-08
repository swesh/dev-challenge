
const Table = require("../../site/TableDrawer");
const testData = [{
    "name": "gbpjpy",
    "bestBid": 155.06975331319313,
    "bestAsk": 158.80445765941522,
    "openBid": 155.94965735539577,
    "openAsk": 160.6303426446042,
    "lastChangeAsk": -7.606537934293129,
    "lastChangeBid": -7.305066565873602,
    midPrice: 15
}, {
    "name": "abcd",
    "bestBid": 165.06975331319913,
    "bestAsk": 158.80445765941722,
    "openBid": 155.94965735539577,
    "openAsk": 170.6303426446042,
    "lastChangeAsk": -8.606537934293129,
    "lastChangeBid": -10.305066565873602,
    midPrice: 12
}, {
    "name": "xywz",
    "bestBid": 175.06975331319313,
    "bestAsk": 108.80445765941522,
    "openBid": 115.94965735539577,
    "openAsk": 160.6303426446042,
    "lastChangeAsk": -8.606537934293129,
    "lastChangeBid": -0.305066565873602,
    midPrice: 9
}];



describe('Testing TableDrawer', function () {
    Table.draw(testData, 0);
    it('Should sort dataArray on lastChangeBid', function () {
        expect(testData[0].lastChangeBid === -10.305066565873602).toBe(true);
    });
    it('Should  html string for data entry of item which was initially at 0th index', function() {
        expect(testData[1].html !== undefined).toBe(true);
    });
});