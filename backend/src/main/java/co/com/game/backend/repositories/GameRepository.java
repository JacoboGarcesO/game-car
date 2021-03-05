package co.com.game.backend.repositories;

import co.com.game.backend.entities.Game;
import org.springframework.data.repository.CrudRepository;

public interface GameRepository extends CrudRepository<Game, Long> { }
