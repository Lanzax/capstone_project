package com.capstone.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.capstone.project.model.Recipe;
import com.capstone.project.repository.service.RecipeDaoRepository;

@Service
public class RecipeService {
@Autowired RecipeDaoRepository dao;

public Recipe createRecipe(Recipe r) {
	return dao.save(r);	
}
public List<Recipe> getAllRecipe() {
	return dao.findAll();
}
public Recipe findRecipeById(Long id) {
	return dao.findById(id).get();
	
}
public String putRecipe(Recipe r) {
	dao.save(r);
	return "La ricetta: "+r.getNome()+" è stata salvata";
}
public String deleteRecipes(Long id) {
	dao.deleteById(id);
	return "La ricetta è stata eliminata";
}
public String deleteAll() {
	dao.deleteAll();
	return "Tutto eliminato";
}
public List<Recipe> getRecipeByCategoria(String categoria){
	return dao.getRecipeByCategoria(categoria);
}
public List<Recipe> createRecipe(List<Recipe> r) {
	return dao.saveAll(r);

}

}
