package co.com.game.backend.controllers;

import co.com.game.backend.entities.Game;
import co.com.game.backend.services.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/game")
public class GameController {

    @Autowired
    private GameService service;

    @GetMapping(path = "/games")
    public Iterable<Game> list(){
        return service.list();
    }

    @PostMapping(path = "/game")
    public Game save(@RequestBody Game game){
        return service.save(game);
    }

    @DeleteMapping(path = "/game/{id}")
    public Long delete(@PathVariable("id") Long id){
        service.delete(id);
        return 1L;
    }
}
