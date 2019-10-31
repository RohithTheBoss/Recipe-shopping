import { OnInit, EventEmitter } from '@angular/core';
import { Ingredient } from '../ingredient.model';

export class ShoppingService implements OnInit{
Ingredients:Ingredient[]=[];
ingredientAdded=new EventEmitter<Ingredient>();
    ngOnInit()
    {
    
    }

    addIngredientsFromRecipe(recipeInggredients:Ingredient[])
    {
        for(let ings of recipeInggredients)
        {
            this.Ingredients.push(ings);
        }
    }
}