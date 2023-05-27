/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.CarsApp.controller;

import com.example.CarsApp.model.Reservation;
import com.example.CarsApp.service.ReservationService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
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
@RequestMapping("/api/Reservation") //RequestMapping completa el endpoint
public class ReservationController {

    @Autowired
    private ReservationService Reservationservice;
    //Peticiones GET

    @GetMapping(value = "/all") //se agrega al endpoint
    public List<Reservation> consultartodos() {
        return Reservationservice.findAll();
    }
    
    @GetMapping(value = "/2020") //se agrega al endpoint
    public List<Reservation> consultarporfechas() {
        return Reservationservice.findAll();
    }

    @GetMapping(value = "/all/id/{id}")
    public Reservation consultarporId(@PathVariable Integer id) {
        return Reservationservice.findById(id);
    }

    //Peticiones POST
    @PostMapping(value = "/save")
    public ResponseEntity<Reservation> agregar(@RequestBody Reservation reservation) {
        Reservation newReservation = Reservationservice.save(reservation);
        return new ResponseEntity<>(newReservation, HttpStatus.CREATED);
    }
    
    
         // Petición DELETE para eliminar
    @DeleteMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void eliminar(@PathVariable Integer id) {
        // Buscar la gama por su ID
        Reservation deleteReservation = Reservationservice.findById(id);
        if (deleteReservation != null) {
            // Eliminar gama
            Reservationservice.delete(id);
        } else {
            // No se encontró gama
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }
    
}
