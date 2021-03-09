import {  Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Ingredient } from '../shared/ingredient.model';
import {Recipe} from './recipe.model';
import{ShoppingListService} from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService{

  recipesChanged=new Subject<Recipe[]>();
  //  private recipes:Recipe[]=[
  //       new Recipe('Indian Food',
  //       'Palak Paneer',
  //       'https://www.ranglapunjabboston.com/files/slider/paneer-saag.jpg',
  //       [
  //           new Ingredient('Palak',10),
  //           new Ingredient('Paneer',20),
  //           new Ingredient('Naan',2)
  //       ] ),
        
  //       new Recipe('American Food',
  //       'Burger',
  //       'https://images.squarespace-cdn.com/content/5a042a65f6576ec5070d7b33/1527072531413-OQC5TSPABS4IP8PJ5YDM/1.jpg?content-type=image%2Fjpeg',
  //       [
  //           new Ingredient('Buns',2),
  //           new Ingredient('Meat',5),
  //           new Ingredient('Lettuce',2),
  //           new Ingredient('Cheese',2)
  //       ] )
        
  //     ];

  private recipes:Recipe[]=[];
    constructor(private slService:ShoppingListService){}

setRecipes(recipes:Recipe[]){
  this.recipes=recipes;
  this.recipesChanged.next(this.recipes.slice());
}

      getRecipes(){
          return this.recipes.slice();
      }

      getRecipe(index:number){
        return this.recipes[index];
      }
addIngredientsToShopList( ingredients:Ingredient[]){
// this.slService.addIngredients(ingredients);
}

addRecipe(recipe:Recipe){
  this.recipes.push(recipe);
this.recipesChanged.next(this.recipes.slice());
}
updateRecipe(index:number,newRecipe:Recipe){
  this.recipes[index]=newRecipe;
  this.recipesChanged.next(this.recipes.slice());
}
deleteRecipe(index:number){
  this.recipes.splice(index,1);
  this.recipesChanged.next(this.recipes.slice());
}
}