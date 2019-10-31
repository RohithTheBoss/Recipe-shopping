import { OnInit,  } from "@angular/core";
import { Ingredient } from './ingredient.model';

export class Recipe implements OnInit{
   name:string;
   content:string;
   imagePath:string;
   recipeIngredients:Ingredient[]
   constructor(name:string,content:string,imagePath:string,recipeIngredients:Ingredient[])
       {
            this.name=name;
            this.content=content;
            this.imagePath=imagePath;
            this.recipeIngredients=recipeIngredients;

       }
   
    ngOnInit()
    {

    }

}