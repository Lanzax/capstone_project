package com.capstone.project.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
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
@Column(columnDefinition = "text")
private String descrizione_piccola;
@Column(columnDefinition = "text")
private String descrizione_grande;

public Recipe(String categoria,String nome, String[] ingredienti, String immagine,String descrizione_piccola,String descrizione_grande) {
	super();
	this.nome = nome;
	this.categoria = categoria;
	this.ingredienti = ingredienti;
	this.immagine = immagine;
	this.descrizione_piccola=descrizione_piccola;
	this.descrizione_grande=descrizione_grande;
}


}
