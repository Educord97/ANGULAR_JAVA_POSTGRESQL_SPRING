package io.github.educord97.agenda;

import io.github.educord97.agenda.model.entity.Contato;
import io.github.educord97.agenda.model.repository.ContatoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class AgendaApiApplication {

	/*
	@Bean
	public CommandLineRunner commandLineRunner(
		@Autowired ContatoRepository repository) {
    return args -> {
		Contato contato = new Contato();
		contato.setNome("Manoel Cordeiro");
		contato.setEmail("manoel@gmail.com");
		contato.setFavorito(true);
		repository.save(contato);
	};
	}
	 */

	public static void main(String[] args) {
		SpringApplication.run(AgendaApiApplication.class, args);
	}

}
