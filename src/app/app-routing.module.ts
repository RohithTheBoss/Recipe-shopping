import { NgModule } from '@angular/core';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { Routes, RouterModule } from '@angular/router';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';


const routes:Routes =[
    {path:'' ,redirectTo:'/recipes', pathMatch:'full'},
    {path:'recipes', component:RecipeComponent, children:
        [ {path:'', component:RecipeStartComponent},
          {path:'new',component:RecipeEditComponent}, /////placed this before :id because if placed after the dynamic path it will be taking that "new" in id's place.
          {path:':id', component:RecipeDetailsComponent},
         
          {path:':id/edit', component:RecipeEditComponent}
        ]
    },
    {path:'shopping-list',component:ShoppingListComponent}
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule 
{

}