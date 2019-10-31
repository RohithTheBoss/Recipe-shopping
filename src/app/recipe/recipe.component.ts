import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from './recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  
// selectedRecipe:Recipe;
// view:string='recipe-list';
//   ngOnInit() {
    
//   }
//   displayDetails()
//   {
//     this.view='recipe-details';
//   }
//   selectedRecipeInList(recipe:Recipe)
//   {
//     this.selectedRecipe=recipe;
//     console.log('inside selectedRecipeInLIst     '+this.selectedRecipe.name+'   '+this.selectedRecipe.imagePath+'  '+this.selectedRecipe.content)
//   }

//////////////////using services/////////////////
// view:string;
// selectedRecipe:Recipe;
// ngOnInit() {
//     this.recipeService.selectedRecipe.subscribe((recipe:Recipe)=>{this.selectedRecipe=recipe})
//      }
//      constructor(private recipeService:RecipeService){}
//      loadFeature:string='recipe';
//     //  selectedRecipe:Recipe=this.recipeService.selectedRecipe;
//      displayDetails()
//        {
         
//           this.view='recipe-details';
//           console.log('inside Display details    '+this.selectedRecipe.name+'   '+this.selectedRecipe.imagePath+'  '+this.selectedRecipe.content)
//        }


       ///////////using routers/////////////
       
selectedRecipe:Recipe;
ngOnInit() {
    this.recipeService.selectedRecipe.subscribe((recipe:Recipe)=>{this.selectedRecipe=recipe})
     }
     constructor(private recipeService:RecipeService, private route:ActivatedRoute, private router:Router){}
    
     onNewRecipe()
     {
       this.router.navigate(['new'],{relativeTo:this.route})

     }
    

}
