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

    public void generateAdvance(Long id, Long limit){
        int dado;
        long percentage;

        for (Gamer p: repository.findAllByidGame(id)) {
            dado=(int)(Math.ceil( Math.random()*6))*100;
            percentage=(dado*100)/(limit*1000);
            p.setPercentage(p.getPercentage()+percentage);
            if(p.getPercentage()<=100){
                repository.save(p);
            }
        }
    }
}
