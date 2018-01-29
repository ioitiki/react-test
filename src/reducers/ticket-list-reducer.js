export default (state = [], action) => {
  switch (action.type) {
  case 'ADD_TICKET':
    const { names, location, description, timeOpenend, id } = action;
    return [
      ...state,
      {
        names : names,
        location : location,
        description : description,
        timeOpenend : timeOpenend,
        id : id
      }
    ];
  default:
    return state;
  }
};
