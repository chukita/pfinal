/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.portfolio;

import com.portfolio.portfolio.dao.UserDao;
import com.portfolio.portfolio.entity.user;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Usuario
 */
@RestController
public class controller {
    
    @Autowired
    private UserDao UserDao;
    
    
    @GetMapping("/api/user/{id}")
    @ResponseBody
    public user usuario(@PathVariable Integer id){
        return(UserDao.findById(id).get());
    }
    
    @GetMapping("/api/user/username")
    @ResponseBody
    public user usuario(){
        return(UserDao.findByUsername("chukitaaaaa"));
    }
    
    @PostMapping("/api/user/login")
    @ResponseBody
    public user login(@RequestBody user u){
        return(UserDao.findByUsernameAndPassword(u.getUsername(),u.getPassword()));
    }
    
    @PostMapping("/api/user/add")
    public void newUser(@RequestBody user u){
        UserDao.save(u);
    }
    
    @PutMapping("/api/user/edit")
    public void editUser(@RequestBody user u){
        UserDao.save(u);
    }
    
    @DeleteMapping("/api/user/delete/{id}")
    public void deleteUser(@PathVariable Integer id){
        UserDao.deleteById(id);
    }
    
    
}
