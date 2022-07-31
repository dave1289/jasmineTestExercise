

describe('calculate tip amount with values', function(){
    it('should calculate tip of 20%', function() {
    expect(calculateTipPercent(100, 20)).toEqual(20)
    expect(calculateTipPercent(20, 4)).toEqual(20)
    expect(calculateTipPercent(500, 100)).toEqual(20)
    });
})

describe('table appending', function() {
    beforeEach(function(){
    })
    it('appends test entry into payment table', function() {
        const newTr = document.createElement('tr');
        appendTd(newTr, 'test');
        paymentTbody.append(newTr);
        const check = document.querySelector('#paymentTable td').textContent;
        expect(check).toBe('test');
        document.querySelector('#paymentTable').deleteRow(1);
    })
});

