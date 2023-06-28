package com.capstone.project.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="recipes")
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class Recipe {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;
@Column(name = "categoria",nullable = false)
private String categoria;
@Column(nullable = false)
private String nome;
@Column(nullable = false)
private String[] ingredienti;
private String immagine;

public Recipe(String categoria,String nome, String[] ingredienti, String immagine) {
	super();
	this.nome = nome;
	this.categoria = categoria;
	this.ingredienti = ingredienti;
	this.immagine = immagine;
}


}
