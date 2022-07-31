const testVal = {years: 30, amount: 150000, rate:5}

it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment(testVal)).toEqual('805.23')
})

it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment(testVal).length).toEqual(6)
});
afterEach(function(){
  value = {}
})

