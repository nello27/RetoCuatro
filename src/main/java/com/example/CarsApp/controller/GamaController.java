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
import org.springframework.web.bind.annotation.RestController;

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
    public ResponseEntity<Gama> agregar(@RequestBody Gama gama) {
        Gama newCar = gamaservice.save(gama);
        return new ResponseEntity<>(newCar, HttpStatus.CREATED);
    }

    //Petición PUT para actualizar
    @PutMapping(value = "/update")

    public ResponseEntity<Gama> actualizar(@RequestBody Gama gama) {
        // Obtener el ID del objeto Gama del JSON
        Integer id = gama.getIdGama();

        // Buscar la gama por su ID
        Gama newGama = gamaservice.findById(id);
        if (newGama != null) {
            // Actualizar los campos de gama con los datos del Request
            newGama.setName(gama.getName());
            newGama.setDescription(gama.getDescription());

            Gama updatedGama = gamaservice.save(newGama);

            return new ResponseEntity<>(updatedGama, HttpStatus.OK);
        } else {
            // No lo encontró
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Integer id) {
        // Buscar la gama por su ID
        Gama gama = gamaservice.findById(id);
        if (gama != null) {
            // Eliminar gama
            gamaservice.delete(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            // No se encontró gama
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
