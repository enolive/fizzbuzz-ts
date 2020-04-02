test.each([
    [1, "1"],
    [2, "2"],
    [4, "4"]
])('%i returns %s', (inputNumber, expected) => {
    const fizzBuzz = (input: number) => input.toString();
    expect(fizzBuzz(inputNumber)).toEqual(expected);
});
