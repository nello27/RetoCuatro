/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.CarsApp.controller;

import com.example.CarsApp.model.Gama;
import com.example.CarsApp.service.GamaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

/**
 *
 * @author macbookpro
 */
@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})  //acepte todas las peticiones entrantes
@RequestMapping("/api/Gama") //RequestMapping completa el endpoint
public class GamaController {

    @Autowired
    private GamaService gamaservice;
    //Peticiones GET

    @GetMapping(value = "/all") //se agrega al endpoint
    public List<Gama> consultartodos() {
        return gamaservice.findAll();
    }

    @GetMapping(value = "/all/id/{id}")
    public Gama consultarporId(@PathVariable Integer id) {
        return gamaservice.findById(id);
    }

    @PostMapping(value = "/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Gama agregar(@RequestBody Gama gama) {
        return gamaservice.save(gama);
    }

    // Petición PUT para actualizar
    @PutMapping(value = "/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Gama actualizar(@RequestBody Gama gama) {
        // Obtener el ID del objeto Gama del JSON
        Integer id = gama.getIdGama();

        // Buscar la gama por su ID
        Gama existingGama = gamaservice.findById(id);
        if (existingGama != null) {
            // Actualizar los campos de gama con los datos del Request
            existingGama.setName(gama.getName());
            existingGama.setDescription(gama.getDescription());

            Gama updatedGama = gamaservice.save(existingGama);

            return updatedGama;
        } else {
            // No lo encontró
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }
     // Petición DELETE para eliminar
    @DeleteMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void eliminar(@PathVariable Integer id) {
        // Buscar la gama por su ID
        Gama gama = gamaservice.findById(id);
        if (gama != null) {
            // Eliminar gama
            gamaservice.delete(id);
        } else {
            // No se encontró gama
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

}
