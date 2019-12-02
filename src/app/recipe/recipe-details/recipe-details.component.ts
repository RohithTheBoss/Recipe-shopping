import { Component, OnInit, Input } from '@angular/core';
//import { RecipeService } from '../recipe.service';
import { Recipe } from 'src/app/recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
// @Input() soloReci:Recipe;
// constructor()
// {}

//   ngOnInit() {
    
   
//   }
 
  ////////////using service//////////////
  // @Input() soloReci:Recipe;
  // ngOnInit() {
    
   
  //     }
  //     constructor(private recipeService:RecipeService)
  //     {

  //     }
  //     addIngredientToShoppingList()
  //     {
  //       this.recipeService.addRecipeToShoppingList(this.soloReci.recipeIngredients);//giving selected recipe's ingredients
        
        
  //     }

      //////////////using routers////////////

       soloReci:Recipe;
       id:number;

       constructor(private recipeService:RecipeService, private route:ActivatedRoute, private router:Router)
       {
 
       }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>
    {
      this.id=+params['id'];
      this.soloReci=this.recipeService.getRecipe(this.id);
    });
      }
      
      addIngredientToShoppingList()
      {
        this.recipeService.addRecipeToShoppingList(this.soloReci.recipeIngredients);//giving selected recipe's ingredients
        
        
      }
      onEditRecipe()
      {
        this.router.navigate(['edit'],{relativeTo:this.route})
      }
      onDeleteRecipe() {
        this.recipeService.deleteRecipe(this.id);
        this.router.navigate(['../'],{relativeTo: this.route});

      }
}
