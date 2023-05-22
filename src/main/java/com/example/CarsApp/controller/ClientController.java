/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.CarsApp.controller;

import com.example.CarsApp.model.Client;
import com.example.CarsApp.service.ClientService;
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
@RequestMapping("/api/Client") //RequestMapping completa el endpoint
public class ClientController {

    @Autowired
    private ClientService clientservice;

    //Peticiones GET
    @GetMapping(value = "/all") //se agrega al endpoint
    public List<Client> consultartodos() {
        return clientservice.findAll();
    }

    //Peticiones POST
    @PostMapping(value = "/save")
    public ResponseEntity<Client> agregar(@RequestBody Client cliente) {
        Client newClient = clientservice.save(cliente);
        return new ResponseEntity<>(newClient, HttpStatus.CREATED);
    }

    //Petición PUT para actualizar
    @PutMapping(value = "/update")

    public ResponseEntity<Client> actualizar(@RequestBody Client client) {
        // Obtener el ID del objeto Client del JSON
        Integer id = client.getIdClient();

        // Buscar el cliente por su ID
        Client newClient = clientservice.findById(id);
        if (newClient != null) {
            // Actualizar los campos del cliente con los datos del Request
            newClient.setEmail(client.getEmail());
            newClient.setPassword(client.getPassword());
            newClient.setName(client.getName());
            newClient.setAge(client.getAge());

            Client updatedClient = clientservice.save(newClient);

            return new ResponseEntity<>(updatedClient, HttpStatus.OK);
        } else {
            // No lo encontró
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Integer id) {
        // Buscar la gama por su ID
        Client client = clientservice.findById(id);
        if (client != null) {
            // Eliminar gama
            clientservice.delete(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            // No se encontró gama
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
