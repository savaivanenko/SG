import refs from './refs'

const state = {
  distance: {
    unit: '',
    value: ''
  },
  convert_to: '',
  result: '',
}

refs.form.addEventListener('submit', event => {
  event.preventDefault();
  refs.result.value = state.result

  const formData = new FormData(event.target);
  const submittedData = {}

  formData.forEach((value, key) => {
    submittedData[key] = value;
  })

  state.distance.value = +(submittedData.value)
  const distanceUnit = state.distance.unit = submittedData.unitIn
  const convertTo = state.convert_to = submittedData.convert_to

  const calculate = function () {

    if (distanceUnit === 'm' && convertTo === 'sm') {
      state.result = state.distance.value * 100;
      refs.result.value = state.result;
    } else if (distanceUnit === 'm' && convertTo === 'in') {
      state.result = (state.distance.value * 39.37).toFixed(2);
      refs.result.value = state.result;
    } else if (distanceUnit === 'm' && convertTo === 'ft') {
      state.result = (state.distance.value * 3.28).toFixed(2);
      refs.result.value = state.result;
    } else if (distanceUnit === 'm' && convertTo === 'm') {
      state.result = state.distance.value;
      refs.result.value = state.result;
    } else if (distanceUnit === 'sm' && convertTo === 'm') {
      state.result = (state.distance.value * 0.01).toFixed(2);
      refs.result.value = state.result;
    } else if (distanceUnit === 'sm' && convertTo === 'in') {
      state.result = (state.distance.value * 0.39).toFixed(2);
      refs.result.value = state.result;
    } else if (distanceUnit === 'sm' && convertTo === 'ft') {
      state.result = (state.distance.value * 0.03).toFixed(2);
      refs.result.value = state.result;
    } else if (distanceUnit === 'sm' && convertTo === 'sm') {
      state.result = state.distance.value;
      refs.result.value = state.result;
    } else if (distanceUnit === 'in' && convertTo === 'm') {
      state.result = (state.distance.value * 0.03).toFixed(2);
      refs.result.value = state.result;
    } else if (distanceUnit === 'in' && convertTo === 'sm') {
      state.result = (state.distance.value * 2.54).toFixed(2);
      refs.result.value = state.result;
    } else if (distanceUnit === 'in' && convertTo === 'in') {
      state.result = state.distance.value;
      refs.result.value = state.result;
    } else if (distanceUnit === 'in' && convertTo === 'ft') {
      state.result = (state.distance.value * 0.08).toFixed(2);
      refs.result.value = state.result;
    } else if (distanceUnit === 'ft' && convertTo === 'm') {
      state.result = (state.distance.value * 0.3).toFixed(2)
      refs.result.value = state.result;
    } else if (distanceUnit === 'ft' && convertTo === 'sm') {
      state.result = (state.distance.value * 30.48).toFixed(2);
      refs.result.value = state.result;
    } else if (distanceUnit === 'ft' && convertTo === 'in') {
      state.result = state.distance.value * 12;
      refs.result.value = state.result;
    } else if (distanceUnit === 'ft' && convertTo === 'ft') {
      state.result = state.distance.value;
      refs.result.value = state.result;
    }


  }

  calculate();
  console.log(state);

})