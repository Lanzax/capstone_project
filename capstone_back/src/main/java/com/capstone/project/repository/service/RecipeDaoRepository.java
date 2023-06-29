package com.capstone.project.repository.service;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capstone.project.model.Recipe;

public interface RecipeDaoRepository extends JpaRepository<Recipe,Long> {
	List<Recipe> getRecipeByCategoria(String categoria);
}

