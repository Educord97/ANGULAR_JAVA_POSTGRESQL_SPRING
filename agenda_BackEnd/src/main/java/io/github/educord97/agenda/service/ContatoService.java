package io.github.educord97.agenda.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import io.github.educord97.agenda.model.entity.Contato;

@Service
public interface ContatoService {
	
	Page<Contato> findAll(Pageable pageable, String search);

}
