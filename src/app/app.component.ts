import { Component } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe/recipe.service';
import { ShoppingService } from './shopping-list/shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[RecipeService,ShoppingService]
})
export class AppComponent {
  recipes:Recipe;
  loadFeature:string='recipe';
  onSelectedFeature(selOption:string)
  {
    this.loadFeature=selOption;
  }



}
