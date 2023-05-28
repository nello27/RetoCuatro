/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.CarsApp.dao;

import com.example.CarsApp.model.Reservation;
import java.util.Date;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author macbookpro
 */
@Repository
public interface ReservationDao extends CrudRepository<Reservation, Integer>{
    
    //Reports 1
    //SELECT * FROM Reservation WHERE startDate AFTER fechaA AND devolutionDate BEFORE fechaB
    
    public List<Reservation>findAllByStartDateAfterAndDevolutionDateBefore(Date fechaA, Date fechaB);
    
    //Reports 2
    //SELECT * FROM Reservation WHERE status = "valorNecesitado"
    
    public List<Reservation>findAllByStatus(String status);
    
    //Reports 3
    //SELECT client, COUNT(client) FROM Reservation GROUP BY client ORDER BY COUNT(client) DESC;
    //LISTA DE PAREJAS DOS VALORES
    //[client1, totalcliente1]
    //[client2, totalcliente2]
    
    @Query("SELECT c.client, COUNT(c.client) FROM Reservation AS c GROUP BY c.client ORDER BY COUNT(c.client) DESC")
    
    public List<Object[]> getTotalReservationByClient();
    
}
