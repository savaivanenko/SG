import refs from './refs'

const state = {
  distance: {
    unit: '',
    value: ''
  },
  convert_to: '',
  result: '',
}

const coefficient = {
  m_sm: 100,
  m_in: 39.37,
  m_ft: 3.28,
  m_m: 1,
  sm_sm: 1,
  sm_m: 0.01,
  sm_in: 0.39,
  sm_ft: 0.03,
  in_sm: 2.54,
  in_m: 0.03,
  in_in: 1,
  in_ft: 0.08,
  ft_m: 0.3,
  ft_sm: 30.48,
  ft_in: 12,
  ft_ft: 1,
}

refs.form.addEventListener('submit', event => {
  event.preventDefault();
  refs.result.value = state.result

  const formData = new FormData(event.target);
  const submittedData = {}

  formData.forEach((value, key) => {
    submittedData[key] = value;
  })

  const keyForCoefficient = submittedData.unitIn + "_" + submittedData.convert_to
  state.distance.value = +(submittedData.value)
  state.distance.unit = submittedData.unitIn
  state.convert_to = submittedData.convert_to

  const calculate = function () {
    state.result = +(state.distance.value) * coefficient[keyForCoefficient]
    refs.result.value = state.result;
  }

  calculate();
  console.log(state);
})



// const config = {
//   "m": {
//     "inch": 39.37,
//     "ft": 3.28084
//   },
//   "inch": {
//     "m": 0.0254,
//     "ft": 0.0833333
//   }
// }

// const input = {
//   "distance": {
//     "unit": "m",
//     "value": 0.5
//   },
//   "convert_to": "ft"
// }

// function Test(obj) {
//   const {
//     unit,
//     value
//   } = obj.distance;
//   const result = value * config[unit][obj.convert_to];
//   return {
//     "unit": obj.convert_to,
//     "value": result
//   }
// }

// const output = Test(input);
// document.write(JSON.stringify(output));