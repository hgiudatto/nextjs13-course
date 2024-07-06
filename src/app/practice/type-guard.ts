// Composable type guards

const isArrayOfStrings = (value: unknown) => {
    return (
      Array.isArray(value) &&
      value.every((item) => typeof item === 'string')
    )
  }
  
  const myFunc = (value: unknown) => {
    if (isArrayOfStrings(value)) {
      console.log(value)
    } else {
      console.log('Oops...! this ain\'t what we expected.')
    }
  }
  
  myFunc([1, 99, 65, 105, 19034, 810]);
  