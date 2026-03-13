//serve para controlar o fluxo da minha API, os pedido que vem das URLs serão tratados aqui, e a lógica de negócio fica na camada de serviço,
// e a camada de acesso a dados fica na camada de repositório
package com.projeto.bolsafamilia.controller;

import java.math.BigDecimal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.projeto.bolsafamilia.model.Bolsafamiliamodel;
import com.projeto.bolsafamilia.repository.BolsafamiliaRepository;
import com.projeto.bolsafamilia.service.BolsafamiliaService;

//import jakarta.persistence.criteria.Predicate;


@RestController
@RequestMapping("/api/Bolsafamiliamodel")
@CrossOrigin(origins = "*")
public class Bolsafamiliacontroller {

    @Autowired
    private BolsafamiliaRepository repository;

    @Autowired
    private BolsafamiliaService service;
    //busca os dados do banco de dados, e retorna uma página de resultados, com base nos parâmetros de busca e paginação fornecidos na URL
    //
   @GetMapping("/busca")
    public Page<Bolsafamiliamodel> busca(
        @RequestParam(required = false) Long id,
        @RequestParam(required = false) String nome,
        @RequestParam(required = false) String uf,
        @RequestParam(required = false) String nomeMunicipio,
        @RequestParam(required = false) String codigoMunicipioSiafi,
        @RequestParam(required = false) String cpdFavorecido,
        @RequestParam(required = false) String competencia,
        @RequestParam(required = false) String nisFavorecido,
        @RequestParam(required = false) BigDecimal valorMinimo,
        @RequestParam(required = false) BigDecimal valorMaximo,
        @RequestParam(defaultValue = "0") int pagina,
        @RequestParam(defaultValue = "20") int tamanho) {

    return service.Busca(
        id,
        nome,
        uf,
        nomeMunicipio,
        codigoMunicipioSiafi,
        competencia,
        nisFavorecido,
        cpdFavorecido,
        valorMinimo,
        valorMaximo,
        pagina,
        tamanho
    );
}
    @GetMapping("/todos")
    public Page<Bolsafamiliamodel> listartodos(
        @RequestParam(required = false) int pagina,
        @RequestParam(required = false) int tamanho) {
        return service.listarTodos(pagina, tamanho);
        }
}

