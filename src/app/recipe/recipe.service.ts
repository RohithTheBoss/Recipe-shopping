import { OnInit, EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../ingredient.model';
import { ShoppingService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService implements OnInit
{
    recipesChanged = new Subject<Recipe[]>();  //added as part of forms
    selectedRecipe = new EventEmitter<Recipe>();
    recipes:Recipe[]=[new Recipe('omlet','double egg omlet','https://www.sbs.com.au/food/sites/sbs.com.au.food/files/IMG_1105.jpg',[new Ingredient('eggs',2),new Ingredient('chilly powder',1),new Ingredient('salt',1)]),new Recipe('omlet large','double egg omlet','https://www.sbs.com.au/food/sites/sbs.com.au.food/files/IMG_1105.jpg',[new Ingredient('eggs',4),new Ingredient('chilly powder',2),new Ingredient('salt',2)])];//,new Recipe('Another Test  Name','Antoher Test Description','https://www.sbs.com.au/food/sites/sbs.com.au.food/files/IMG_1105.jpg')];
    
    ngOnInit()
    {

    }
    constructor(private slService:ShoppingService)
    {

    }
    addRecipeToShoppingList(reciIngredients:Ingredient[])
    {
        this.slService.addIngredientsFromRecipe(reciIngredients);

    }

    getRecipe(index:number)
    {
        return this.recipes[index];
    }
    
    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());

    }
    updateRecipe(newRecipe: Recipe, index: number) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index : number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());

    }

}