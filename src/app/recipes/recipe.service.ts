import { EventEmitter } from '@angular/core';
import {Recipe} from './recipe.model';
export class RecipeService{
recipeSelected=new EventEmitter<Recipe>();
   private recipes:Recipe[]=[
        new Recipe('A Test Recipe','This is a test','https://risingsunchatsworth.co.za/wp-content/uploads/sites/107/2015/01/recipes.png' ),
        
        new Recipe('Another Test Recipe','This is a test','https://risingsunchatsworth.co.za/wp-content/uploads/sites/107/2015/01/recipes.png' )
        
      ];

      getRecipes(){
          return this.recipes.slice();
      }
}