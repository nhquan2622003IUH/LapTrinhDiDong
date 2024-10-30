const initialValue = {
  data: [],
  loading: false,
  error: null,
};

const todoReducer = (state = initialValue, action) => {
  switch (action.type) {
    case 'GET_DATA_REQUEST':
      return { ...state, loading: true };
    case 'GET_DATA_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'GET_DATA_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'CREATE_DATA_SUCCESS':
      return { ...state, data: [...state.data, action.payload] };
    case 'UPDATE_DATA_SUCCESS':
      return {
        ...state,
        data: state.data.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };
    case 'DELETE_DATA_SUCCESS':
      return {
        ...state,
        data: state.data.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

export default todoReducer;
