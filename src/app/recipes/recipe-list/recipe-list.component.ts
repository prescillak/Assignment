import { Component, OnInit } from '@angular/core';
import{Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[
    new Recipe('A Test Recipe','This is a test','https://risingsunchatsworth.co.za/wp-content/uploads/sites/107/2015/01/recipes.png' ),
    
    new Recipe('A Test Recipe','This is a test','https://risingsunchatsworth.co.za/wp-content/uploads/sites/107/2015/01/recipes.png' )
    
 
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
