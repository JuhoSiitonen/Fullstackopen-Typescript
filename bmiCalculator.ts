interface parsedBMIArgs {
  height: number;
  weight: number;
}

const parsedArguments = (args: string[]): parsedBMIArgs => {
  if (args.length < 4) throw new Error('Not enough arguments');
  if (isNaN(Number(args[2]))) {
    throw new Error('Provided values were not numbers!');
  }
  const values: number = Number(args[2]);
  if (isNaN(Number(args[3]))) {
    throw new Error('Provided values were not numbers!');
  }
  const targ: number = Number(args[3]);
  return {
    height: values,
    weight: targ
  }
}

const bmiCalculator = (height: number, weight: number) : string => {
    const metric = height * 0.01;
    const result = weight / ( metric*metric)
    if (result < 18.5) {
      return 'Underweight'
    }
    if (result < 30) {
      return 'Normal (healthy weight)'
    }
    else {
      return 'Overweight'
    }
    
  }

  try {
    const { height, weight } = parsedArguments(process.argv);
    const result = bmiCalculator(height, weight);
    console.log(result)
  } catch (error: unknown) {
    let errorMessage = 'Something bad happened.'
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    console.log(errorMessage);
  }