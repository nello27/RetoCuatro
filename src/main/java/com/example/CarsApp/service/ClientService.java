/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.CarsApp.service;

import com.example.CarsApp.model.Client;
import java.util.List;

/**
 *
 * @author macbookpro
 */
public interface ClientService {

    public Client save(Client client);

    public void delete(Integer id);

    public Client findById(Integer id);

    public List<Client> findAll();
}
