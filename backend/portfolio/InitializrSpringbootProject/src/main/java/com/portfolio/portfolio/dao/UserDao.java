/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.portfolio.portfolio.dao;

import com.portfolio.portfolio.entity.user;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Usuario CRUD
 */
@Repository
public interface UserDao extends CrudRepository<user,Integer>{
    user findByUsername(String usermail); 
    user findByUsernameAndPassword(String usermail,String Password); 
   
}
