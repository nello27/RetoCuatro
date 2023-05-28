/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.CarsApp.service;

import com.example.CarsApp.model.DTOs.CompletedAndCancelled;
import com.example.CarsApp.model.DTOs.TotalAndClient;
import com.example.CarsApp.model.Reservation;
import java.util.List;

/**
 *
 * @author macbookpro
 */
public interface ReservationService {

    public Reservation save(Reservation reservation);

    public void delete(Integer id);

    public Reservation findById(Integer id);

    public List<Reservation> findAll();
    
    public List<Reservation> getReservationBetweenDatesReport(String fechaA, String fechaB);
    
    public CompletedAndCancelled getReservationStatusReport();
    
    public List<TotalAndClient> getTopClientsReport();
    
}
