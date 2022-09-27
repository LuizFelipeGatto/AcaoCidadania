package com.projeto.acaocidadania.service;

import com.projeto.acaocidadania.model.Unidade;
import com.projeto.acaocidadania.repository.UnidadeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

@Service
@RequiredArgsConstructor
public class UnidadeService {

    private final UnidadeRepository unidadeRepository;

    public ResponseEntity<Unidade> save(@RequestBody Unidade unidade){
        return ResponseEntity.ok(unidadeRepository.save(unidade));
    }
}
