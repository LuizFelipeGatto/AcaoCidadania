package com.projeto.acaocidadania.model;

import com.projeto.acaocidadania.enums.NivelUsuario;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(schema = "sistema", name = "usuario")
public class Usuario {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "nome")
    private String nome;

    @Column(name = "cpf")
    private String cpf;

    @Column(name = "logradouro")
    private String logradouro;

    @Column(name = "cidade")
    private String cidade;

    @Column(name = "celular")
    private String celular;

    @Column(name = "nivel")
    @Enumerated(EnumType.STRING)
    private NivelUsuario nivel = NivelUsuario.USU;

    @OneToOne
    @JoinColumn(name = "id_unidade")
    private Unidade unidade;

}
