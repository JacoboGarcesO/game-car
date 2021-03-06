package co.com.game.backend.repositories;

import co.com.game.backend.entities.Gamer;
import org.springframework.data.repository.CrudRepository;

public interface GamerRepository extends CrudRepository<Gamer, Long> {
    Iterable<Gamer> findAllByidGame(Long idGame);
}
