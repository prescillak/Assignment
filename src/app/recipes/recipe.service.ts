import {  Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import {Recipe} from './recipe.model';
import{ShoppingListService} from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService{
recipeSelected=new Subject<Recipe>();
   private recipes:Recipe[]=[
        new Recipe('Indian Food',
        'Palak Paneer',
        'https://www.ranglapunjabboston.com/files/slider/paneer-saag.jpg',
        [
            new Ingredient('Palak',10),
            new Ingredient('Paneer',20),
            new Ingredient('Naan',2)
        ] ),
        
        new Recipe('American Food',
        'Burger',
        'https://images.squarespace-cdn.com/content/5a042a65f6576ec5070d7b33/1527072531413-OQC5TSPABS4IP8PJ5YDM/1.jpg?content-type=image%2Fjpeg',
        [
            new Ingredient('Buns',2),
            new Ingredient('Meat',5),
            new Ingredient('Lettuce',2),
            new Ingredient('Cheese',2)
        ] )
        
      ];
    constructor(private slService:ShoppingListService){}

      getRecipes(){
          return this.recipes.slice();
      }

      getRecipe(index:number){
        return this.recipes[index];
      }
addIngreToShopList( ingredients:Ingredient[]){
this.slService.addIngre(ingredients);
}

}