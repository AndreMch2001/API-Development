package com.projeto.bolsafamilia.dto;

import java.math.BigDecimal;

public record Bolsafamiliadto(
    String competencia,
    String mesReferencia,
    String uf,
    String nomeMunicipio,
    String nomeFavorecido,
    BigDecimal valorParcela,
    String nisFavorecido
) {}
