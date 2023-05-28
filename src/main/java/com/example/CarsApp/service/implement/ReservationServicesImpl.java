/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.CarsApp.service.implement;

import com.example.CarsApp.dao.ReservationDao;
import com.example.CarsApp.model.Client;
import com.example.CarsApp.model.DTOs.CompletedAndCancelled;
import com.example.CarsApp.model.DTOs.TotalAndClient;
import com.example.CarsApp.model.Reservation;
import com.example.CarsApp.service.ReservationService;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author macbookpro
 */
@Service
public class ReservationServicesImpl implements ReservationService{

    @Autowired
    private ReservationDao reservationdao;

    //@Override
    //@Transactional
    public Reservation save(Reservation reservation) {

        return reservationdao.save(reservation);
        //throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    //@Override
    public void delete(Integer id) {
        reservationdao.deleteById(id);
        //throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    //@Override
    public Reservation findById(Integer id) {

        return reservationdao.findById(id).orElse(null);
        //throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    //@Override
    public List<Reservation> findAll() {

        return (List<Reservation>) reservationdao.findAll();
        //throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }
    
    // RETO 5
    public List<Reservation> getReservationBetweenDates(Date fechaA, Date fechaB){
        
        return reservationdao.findAllByStartDateAfterAndDevolutionDateBefore(fechaA, fechaB);
    
    }
    
    public List<Reservation> getReservationByStatus(String status){
        
        return reservationdao.findAllByStatus(status);
    }
    
    public List<Object[]> getTotalReservationByClient(){
    
          //List<TotalAndClient> respuesta = new ArrayList<>();
          //List<Object[]> reporte = reservationdao.getTotalReservationByClient();
          
          return reservationdao.getTotalReservationByClient();
          

    }

    //@Override
    public List<Reservation> getReservationBetweenDatesReport(String fechaA, String fechaB) {
        
        SimpleDateFormat parser = new SimpleDateFormat("yyyy-MM-dd");
        
        Date a = new Date();
        Date b = new Date();
        
        try{
            
            a = parser.parse(fechaA);
            b = parser.parse(fechaB);
        }catch(ParseException exception){
            
            exception.printStackTrace();
        }
        
        if(a.before(b)){
        
           return getReservationBetweenDates(a,b);
        }else{
            
            return new ArrayList<>();
        
        }
        //throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }
    
    public CompletedAndCancelled getReservationStatusReport(){
    
        List<Reservation> completed = getReservationByStatus("completed");
        List<Reservation> cancelled = getReservationByStatus("cancelled");
        
        Long cantidadCompletada = (long) completed.size();
        
        Long cantidadCancelada = (long) cancelled.size();
        
        CompletedAndCancelled respuesta = new CompletedAndCancelled(cantidadCompletada, cantidadCancelada);
        
        return respuesta;
    }
    
    public List<TotalAndClient> getTopClientsReport(){
    
          List<TotalAndClient> respuesta = new ArrayList<>();
          List<Object[]> reporte = reservationdao.getTotalReservationByClient();
          
          for(Object[] pareja: reporte){
              
              respuesta.add(new TotalAndClient( (Long) pareja[1], (Client) pareja[0]));
          }
          
          return respuesta;
    }
}
