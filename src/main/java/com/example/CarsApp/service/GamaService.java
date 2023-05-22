/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.CarsApp.service;

import com.example.CarsApp.model.Gama;
import java.util.List;

/**
 *
 * @author macbookpro
 */
public interface GamaService {

    public Gama save(Gama gama);

    public void delete(Integer id);

    public Gama findById(Integer id);

    public List<Gama> findAll();
}
