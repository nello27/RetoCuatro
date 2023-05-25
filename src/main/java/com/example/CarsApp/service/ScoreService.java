/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.CarsApp.service;

import com.example.CarsApp.model.Score;
import java.util.List;

/**
 *
 * @author macbookpro
 */
public interface ScoreService {
    
    public Score save(Score score);

    public void delete(Integer id);

    public Score findById(Integer id);

    public List<Score> findAll();
}
