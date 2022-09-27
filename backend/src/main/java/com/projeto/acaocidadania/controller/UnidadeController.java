package com.projeto.acaocidadania.controller;

import com.projeto.acaocidadania.model.Unidade;
import com.projeto.acaocidadania.service.UnidadeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/publico/unidade")
@RequiredArgsConstructor
public class UnidadeController {

    private final UnidadeService unidadeService;

    @PostMapping
    public ResponseEntity<Unidade> salvarUnidade(@RequestBody Unidade unidade){
        return unidadeService.save(unidade);
    }

    @GetMapping("/teste")
    public void teste(){
        System.out.printf("oi");
    }
}
