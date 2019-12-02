import { OnInit, EventEmitter } from '@angular/core';
import { Ingredient } from '../ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingService implements OnInit{
Ingredients:Ingredient[] = [new Ingredient('Apples', 2), new Ingredient('mangoes', 3)];
ingredientsChanged = new EventEmitter<Ingredient[]>();
startedEditing = new Subject<Number>(); // for editing the ingredient
    ngOnInit()
    {
    
    }
    addIngredient(ingredient: Ingredient)
    {
        this.Ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.Ingredients.slice()); // here we are using slice so as to just get a copy of it.
    }
    addIngredientsFromRecipe(recipeInggredients: Ingredient[])
    {
        for(let ings of recipeInggredients)
        {
            this.Ingredients.push(ings);
        }
    }

    getIngredient(index: number)
    {
        return this.Ingredients[index];
    }
    updateIngredient(index: number, newIngredient: Ingredient)
    {
        this.Ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.Ingredients.slice());
    }
    deletingIngredient(index: number)
    {
        this.Ingredients.splice(index, 1); //here 1 indicates the number of items to delete in array
        this.ingredientsChanged.next(this.Ingredients.slice());
    }
}