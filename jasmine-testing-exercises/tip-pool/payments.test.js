describe('summary table population', function() {
    beforeEach(function(){
        allPayments.billAmt = 30;
        allPayments.tipAmt = 5;
        allPayments.tipPercent = 2;
    })
    it('appends test entry into summary table', function() {
        updateSummary()
        const check = document.querySelector('#summaryTable td');

    })
});

afterEach(function() {
    allpayments = {}
})