package com.capstone.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.project.model.Recipe;
import com.capstone.project.service.RecipeService;


@RestController
@RequestMapping("/api/recipe")
public class RecipeController {
@Autowired RecipeService service;

@GetMapping
public List<Recipe> getAllRecipe() {
	return service.getAllRecipe();	
}
@GetMapping("/category/{categoria}")
public List<Recipe> getByCategory(@PathVariable String categoria) {
	return service.getRecipeByCategoria(categoria);	
}
@GetMapping("/{id}")
public Recipe getRecipeById(@PathVariable Long id) {
	return service.findRecipeById(id);

}

@PostMapping
public String createRecipe(@RequestBody Recipe r) {
	service.createRecipe(r);
	return "La ricetta: "+r.getNome()+" è stata salvata";
}

@PutMapping("/{id}")
public String putRecipe(@RequestBody Recipe r) {
	service.putRecipe(r);
	return "La ricetta: "+r.getNome()+" è stata salvata";}

@DeleteMapping("/{id}")
public String deleteRecipe(@PathVariable Long id) {
	service.deleteRecipes(id);
	return "La ricetta è stata eliminata";
}
@DeleteMapping
public String deleteAll(){
	service.deleteAll();
	return "Tutto eliminato";
}
}