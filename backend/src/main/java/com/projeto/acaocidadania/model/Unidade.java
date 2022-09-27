package com.projeto.acaocidadania.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(schema = "sistema", name = "unidade")
public class Unidade {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "nome")
    private String nome;

    @Column(name = "cidade")
    private String cidade;

    @Column(name = "logradouro")
    private String logradouro;
}
