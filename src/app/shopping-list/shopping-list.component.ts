import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient.model';
import { ShoppingService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  // ingredients:Ingredient[]=[]
  // onNewIngredientAdded(newIngre:Ingredient)
  // {
  //   this.ingredients.push(newIngre);
  // }

  //////////////using service//////////////
  ingredients:Ingredient[]=[]
  newIngredientAdded:Ingredient;
  constructor(private slService:ShoppingService)
   { }

  ngOnInit() {
   this.ingredients=this.slService.Ingredients;
   this.slService.ingredientAdded.subscribe((ingre:Ingredient)=>{this.ingredients.push(ingre)});
    

  }


}
