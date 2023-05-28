/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.CarsApp.model.DTOs;

import com.example.CarsApp.model.Client;

/**
 *
 * @author macbookpro
 */
public class TotalAndClient {
    
    private Long total;
    private Client client;

    public Long getTotal() {
        return total;
    }

    public TotalAndClient(Long total, Client client) {
        this.total = total;
        this.client = client;
    }
    
    
    public void setTotal(Long total) {
        this.total = total;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }
    
    
}
