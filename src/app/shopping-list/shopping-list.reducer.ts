import{Ingredient}from '../shared/ingredient.model';

const initialState = {
    ingredients:[
        new Ingredient('Apples',5),
        new Ingredient('TOMATOES',10),
      ]
};


export function shoppingListReducer(state = initialState, action){
    
}