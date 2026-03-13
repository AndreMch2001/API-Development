package com.projeto.bolsafamilia.model;

import java.math.BigDecimal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "governo") //usado para certificar queo nome do tabela é mesmo do banco, caso contrário o hibernate pode tentar pluralizar ou usar camelCase ou até confundir o nome da tabela
@Getter @Setter // Usando Lombok para não precisar escrever Getters e Setters
public class Bolsafamiliamodel {

    @Id
    // Se você já tem a coluna como PK e Serial no banco, 
    // o IDENTITY é a opção correta, mas o Hibernate pode tentar validar.
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String competencia;
    
    @Column(name = "mes_referencia")
    private String mesReferencia;

    private String uf;
  
    @Column(name = "codigo_municipio_siafi")
    private String codigoMunicipioSiafi;

    @Column(name = "nome_municipio")
    private String nomeMunicipio;
    
    @Column(name="cpf_favorecido")
    private String cpfFavorecido;

    @Column(name = "nis_favorecido")
    private String nisFavorecido;

    @Column(name = "nome_favorecido")
    private String nomeFavorecido;
    
    @Column(name = "valor_parcela")
    private BigDecimal valorParcela;
}