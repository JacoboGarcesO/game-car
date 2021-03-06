package co.com.game.backend.repositories;

import co.com.game.backend.entities.Gamer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GamerRepository extends JpaRepository<Gamer, Long> {
    Iterable<Gamer> findAllByidGame(Long idGame);
}
