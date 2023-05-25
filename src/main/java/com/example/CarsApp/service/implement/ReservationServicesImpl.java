/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.CarsApp.service.implement;

import com.example.CarsApp.dao.ReservationDao;
import com.example.CarsApp.model.Reservation;
import com.example.CarsApp.service.ReservationService;
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

}
