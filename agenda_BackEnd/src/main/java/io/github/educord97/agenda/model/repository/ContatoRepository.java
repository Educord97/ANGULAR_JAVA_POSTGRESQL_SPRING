package io.github.educord97.agenda.model.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import io.github.educord97.agenda.model.entity.Contato;

@Repository
public interface ContatoRepository extends JpaRepository<Contato, Integer> {


	Page<Contato> findByNome(Pageable pageable, String name);


}
