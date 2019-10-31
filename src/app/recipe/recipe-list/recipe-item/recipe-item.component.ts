import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
// @Input() recipeItem:Recipe;
 constructor(private recipeService:RecipeService){}
  ngOnInit() {
 
  }
  ////////using service///////////
 // @Input() recipeItem:Recipe;
  
 ////////using routers//////
  @Input() recipeItem:Recipe;
  @Input() index:number;
 

}
