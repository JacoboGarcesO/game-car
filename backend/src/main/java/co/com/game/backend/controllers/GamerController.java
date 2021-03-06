package co.com.game.backend.controllers;

import co.com.game.backend.entities.Gamer;
import co.com.game.backend.services.GamerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/gamer")
public class GamerController {
    @Autowired
    private GamerService service;

    @GetMapping(path = "/gamers/{id}")
    public Iterable<Gamer> list(@PathVariable("id") Long id){
        return service.list(id);
    }

    @PostMapping(path = "/gamer")
    public Gamer save(@RequestBody Gamer gamer){
        return service.save(gamer);
    }

    @PutMapping(path = "/gamer")
    public Gamer update(@RequestBody Gamer gamer){
        if(service.isExist(gamer.getId())){
            return service.save(gamer);
        }
        throw new RuntimeException("No hay ningún registro con ese ID");
    }
    @GetMapping(path = "/run/{id}/{km}")
    public void generateAdvance(@PathVariable("id") Long id, @PathVariable("km") Long km){
        service.generateAdvance(id, km);
    }
}
