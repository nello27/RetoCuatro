/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.CarsApp.dao;

import com.example.CarsApp.model.Client;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author macbookpro
 */
public interface ClientDao extends CrudRepository<Client, Integer>{
    
}
