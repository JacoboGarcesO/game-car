package co.com.game.backend.services;

import co.com.game.backend.entities.Game;
import co.com.game.backend.repositories.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GameService {
    @Autowired
    private GameRepository repository;

    public Iterable<Game> list(){
        return repository.findAll();
    }

    public Game save(Game game){
        return repository.save(game);
    }

    public Long delete(Long id){
        repository.delete(get(id));
        return 1L;
    }

    public Game get(Long id){
        return repository.findById(id).orElseThrow();
    }
}
