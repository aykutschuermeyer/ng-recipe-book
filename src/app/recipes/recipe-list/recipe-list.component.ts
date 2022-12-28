import { Component } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      "Garlic Naan",
      "Bread, Butter, Garlic",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Butter_Garlic_Naan.jpg/800px-Butter_Garlic_Naan.jpg?20150614174921"
    ),
  ];
}
