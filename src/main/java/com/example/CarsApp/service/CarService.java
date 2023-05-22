/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.CarsApp.service;

import com.example.CarsApp.model.Car;
import java.util.List;

/**
 *
 * @author macbookpro
 */
public interface CarService {

    public Car save(Car car);

    public void delete(Integer id);

    public Car findById(Integer id);

    public List<Car> findAll();
}
