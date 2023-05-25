/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.CarsApp.controller;

import com.example.CarsApp.model.Message;
import com.example.CarsApp.service.MessageService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
@RequestMapping("/api/Message") //RequestMapping completa el endpoint
public class MessageController {
    
    @Autowired
    private MessageService messageservice;
    //Peticiones GET

    @GetMapping(value = "/all") //se agrega al endpoint
    public List<Message> consultartodos() {
        return messageservice.findAll();
    }

    @GetMapping(value = "/all/id/{id}")
    public Message consultarporId(@PathVariable Integer id) {
        return messageservice.findById(id);
    }

    @PostMapping(value = "/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Message agregar(@RequestBody Message message) {
        return messageservice.save(message);
    }

    // Petición PUT para actualizar
    @PutMapping(value = "/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Message actualizar(@RequestBody Message message) {
        // Obtener el ID del objeto Gama del JSON
        Integer id = message.getIdMessage();

        // Buscar la gama por su ID
        Message existingGama = messageservice.findById(id);
        if (existingGama != null) {
            // Actualizar los campos de gama con los datos del Request
            existingGama.setMessageText(message.getMessageText());            

            Message updatedGama = messageservice.save(existingGama);

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
        Message deleteMessage = messageservice.findById(id);
        if (deleteMessage != null) {
            // Eliminar gama
            messageservice.delete(id);
        } else {
            // No se encontró gama
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }
    
}
