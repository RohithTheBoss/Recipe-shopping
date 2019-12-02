import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Recipe } from 'src/app/recipe.model';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
 
// recipes:Recipe[];
// @Output() recipeSelected=new EventEmitter<Recipe>();
// onSelectedRecipe(recipe:Recipe)
// {
//   console.log('inside onSelectedREcipe')
//   this.recipeSelected.emit(recipe);
// }

/////////////////using services////////////////
recipes: Recipe[];
sub: Subscription;
constructor(private recipeService:RecipeService)
{}
ngOnInit()
{
  this.sub = this.recipeService.recipesChanged.subscribe((recipes: Recipe[]) => {
    this.recipes = recipes;
  }); // added as a part of form data to reflect the change from new/edit to list view
  this.recipes = this.recipeService.recipes;
 
}
onSelectedRecipe(selRecipe : Recipe)
{
  console.log('inside onSelectedRecipe');
  this.recipeService.selectedRecipe.emit(selRecipe);
  console.log(selRecipe);

}

ngOnDestroy() {
  this.sub.unsubscribe();
}

}
