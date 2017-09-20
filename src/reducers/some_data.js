
const defaultState = [
  {
    id: '1',
    text: 'Finish this app',
    isComplete: false
  }
]

const someData = (state = defaultState, action) => {
  switch(action.type) {
    case 'SOME_ACTION_HAPPENED':
      return [
        ...state,
        ...action.data
      ];
    default:
      return state;
  }
};

export default someData;
