import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
// recipes:Recipe[];
// @Output() recipeSelected=new EventEmitter<Recipe>();
// onSelectedRecipe(recipe:Recipe)
// {
//   console.log('inside onSelectedREcipe')
//   this.recipeSelected.emit(recipe);
// }

/////////////////using services////////////////
recipes:Recipe[];
constructor(private recipeService:RecipeService)
{}
ngOnInit()
{
  this.recipes=this.recipeService.recipes;
}
onSelectedRecipe(selRecipe:Recipe)
{
  console.log('inside onSelectedRecipe');
  this.recipeService.selectedRecipe.emit(selRecipe);
  console.log(selRecipe)

}

}
