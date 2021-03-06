package co.com.game.backend.services;

import co.com.game.backend.entities.Gamer;
import co.com.game.backend.repositories.GamerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GamerService {

    @Autowired
    private GamerRepository repository;

    public Iterable<Gamer> list(Long id){
        return repository.findAllByidGame(id);
    }

    public Gamer save(Gamer gamer){
        return repository.save(gamer);
    }
    public boolean isExist(Long id){
        return repository.existsById(id);
    }
}
