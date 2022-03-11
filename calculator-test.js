
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 1000, years: 5, rate: 2})).toEqual('17.53')
  expect(calculateMonthlyPayment({amount: 10000, years: 4, rate: 6})).toEqual("234.85")
});


it("should return a result with 2 decimal places", function() {
    expect(calculateMonthlyPayment({amount: 10000, years: 4, rate: 6})).toMatch(/^\d+\.\d\d$/)
});

it("should return a result less than the loan amount", function() {
  expect(Number((calculateMonthlyPayment({amount: 17000, years: 7, rate: 4.5})))).toBeLessThan(Number(("17000")))
})


