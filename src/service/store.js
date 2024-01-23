import { ref, reactive } from 'vue';

const state = reactive({
  valueQ: ref(JSON.parse(getValueQ())),
  valueE: ref(JSON.parse(getValueE())),
});

function setValueQ(value) {
  state.valueQ = value;
  window.localStorage.setItem('VALUEQ', JSON.stringify(value));
}

function getValueQ() {
  if (window.localStorage.getItem('VALUEQ')) {
    return JSON.parse(window.localStorage.getItem('VALUEQ'));
  } else {
    return true;
  }
}

function setValueE(value) {
  state.valueE = value;
  window.localStorage.setItem('VALUEE', JSON.stringify(value));
}

function getValueE() {
  if (window.localStorage.getItem('VALUEE')) {
    return JSON.parse(window.localStorage.getItem('VALUEE'));
  } else {
    return true;
  }
}

// Export necessary functions and data
export { state, setValueQ, setValueE, getValueQ, getValueE };
