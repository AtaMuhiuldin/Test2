import { ADD_LIST, DELETE_LIST_ITEM, EDIT_LIST_ITEM } from "./actionsTypes";

export const addItem = (data = () => {
  const state = {
    type: ADD_LIST,
    value: data
  };
  return state;
});

export const deleteItem = (id = () => {
  const state = {
    type: DELETE_LIST_ITEM,
    value: id
  };
  return state;
});

export const editItem = (id, data) = ()=>{
    const state = {
        type: EDIT_LIST_ITEM, 
        value: {
            id, 
            data
        }
    }
    return state;
}