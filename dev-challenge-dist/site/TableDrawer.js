var Table = (function () {

    var fxPricesArr;
    function prepareTableRowMarup(fxPrices, index) {
        var thisItem = fxPrices[index];
        var markup = `<div class="table-content"><div>${thisItem.name}</div><div>${thisItem.bestBid}</div><div>${thisItem.bestAsk}</div><div>${thisItem.openBid}</div><div>${thisItem.openAsk}</div><div>${thisItem.lastChangeAsk}</div><div> ${thisItem.lastChangeBid}</div></div>`;
        thisItem.html = markup;
    }

    function sortTableData(fxPrices) {
        fxPrices.sort(function (a, b) {
            return a.lastChangeBid - b.lastChangeBid;
        });
    }

    /**
     * prepareSortedTableMarup, prepares the HTML string of sorted table
     */
    function prepareSortedTableMarup(fxPrices) {
        var tableMarkUp = fxPrices.reduce(function (markup, e) { return markup + e.html }, "");
        return tableMarkUp;
    }
    function updateTable(html) {
        var tableContainer = document.getElementsByClassName("table-content-container")[0];
        if (tableContainer) {
            tableContainer.innerHTML = html;
        }
    }

    /**
     * createSparkLine, creates or updates sparkline on every 30 seconds 
     */
    function createSparkLine(fxPrices) {
        var sparkContainerParent = document.getElementsByClassName("spark-line-container")[0];
        if (sparkContainerParent) {
            document.getElementsByClassName("spark-line-container")[0].innerHTML = "";
        }
        fxPrices.map((e) => {
            var sparkContainer = document.createElement("div");
            sparkContainer.id = e.name;
            if (sparkContainerParent) {
                sparkContainerParent.appendChild(sparkContainer);
                Sparkline.draw(sparkContainer, e.midPrice.map((m)=> m.value));
            }
        });
    }

    this.draw = function (fxPrices, index) {
        fxPricesArr = fxPrices;
        prepareTableRowMarup(fxPrices, index);
        sortTableData(fxPrices);
        let html = prepareSortedTableMarup(fxPrices);
        updateTable(html);
        createSparkLine(fxPrices);
    }
   return this;
})();
module.exports = Table;