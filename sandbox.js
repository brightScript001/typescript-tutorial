var FinanceLogger = /** @class */ (function () {
    function FinanceLogger(type, tofrom, details, amount) {
        this.type = type;
        this.tofrom = tofrom;
        this.details = details;
        this.amount = amount;
    }
    FinanceLogger.prototype.format = function () {
        if (this.type === "invoice") {
            return "<h4>Invoice to ".concat(this.tofrom, "</h4><p>for ").concat(this.details, ": \u00A3").concat(this.amount, "</p>");
        }
        else {
            return "<h4>Payment from ".concat(this.tofrom, "</h4><p>for ").concat(this.details, ": \u00A3").concat(this.amount, "</p>");
        }
    };
    return FinanceLogger;
}());
var form = document.querySelector(".new-item-form");
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
var itemList = document.querySelector(".item-list");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var logger = new FinanceLogger(type.value, tofrom.value, details.value, amount.valueAsNumber);
    var li = document.createElement("li");
    li.innerHTML = logger.format();
    itemList.appendChild(li);
    // Reset form fields
    form.reset();
});
