
const Table = require("../../site/TableDrawer");
const Consumer = require("../../site/Consumer");

const newData = {
    body: '{"name":"eurchf","bestBid":1.0622491225893154,"bestAsk":1.106837537390909,"openBid":1.0859970282364062,"openAsk":1.1078029717635938,"lastChangeAsk":-0.026332923242350814,"lastChangeBid":-0.02261008538362863}'};



describe('Testing Consumer', function () {
    it('Consumer.feedData() should call Table.draw after feeding', function () {
        spyOn(Table,"draw");
        Consumer.feedData(newData);
        expect(Table.draw).toHaveBeenCalled();
    });
});

