/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.CarsApp.service;

import com.example.CarsApp.model.Message;
import java.util.List;

/**
 *
 * @author macbookpro
 */
public interface MessageService {

    public Message save(Message message);

    public void delete(Integer id);

    public Message findById(Integer id);

    public List<Message> findAll();
}
