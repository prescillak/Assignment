import{Subject} from 'rxjs';
import{Ingredient} from '../shared/ingredient.model';

export class ShoppingListService{
    ingredientsChanged=new Subject<Ingredient[]>();
  startedEditing=new Subject<number>();
  
    private  ingredients:Ingredient[]=[
        new Ingredient('Apples',5),
        new Ingredient('TOMATOES',10),
      ];
      
getIngredients(){
    return this.ingredients.slice();
}

getIngredient(index:number){
    return this.ingredients[index];
}
addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
}
addIngre(ingredients:Ingredient[]){
this.ingredients.push(...ingredients);   // ... Spread operator
this.ingredientsChanged.next(this.ingredients.slice());
}

updateIngredient(index:number,newIngredient:Ingredient){
    this.ingredients[index]=newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
}
}