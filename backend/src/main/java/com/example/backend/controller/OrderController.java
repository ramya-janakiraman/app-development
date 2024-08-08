package com.example.backend.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.backend.model.Orders;
import com.example.backend.service.OrderService;


@RestController
@RequestMapping("/api/order")
public class OrderController {
    @Autowired
    OrderService os;
    @PostMapping("/post/orders")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Orders>addelements(@RequestBody Orders o)
    {
        Orders ost=os.create(o);
        return new ResponseEntity<>(ost,HttpStatus.CREATED);
    }
    @GetMapping("/get/orders")
    @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    public ResponseEntity<List<Orders>> showinfo()
    {
        return new ResponseEntity<>(os.getAll(),HttpStatus.OK);
    }
    @GetMapping("/get/orders/{oid}")
    @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    public ResponseEntity<Orders> getById(@PathVariable Integer oid)
    {
        Orders obj=os.getId(oid);
        return new ResponseEntity<>(obj,HttpStatus.OK);
    }
    @PutMapping("/put/{oid}")
    @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    public ResponseEntity<Orders> putMethodName(@PathVariable("oid") int oid, @RequestBody Orders o) {
        if(os.update(oid,o) == true)
        {
            return new ResponseEntity<>(o,HttpStatus.OK);
        }
        
        return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
    }
    @DeleteMapping("/delete/{oid}")
    @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    public ResponseEntity<Boolean> delete(@PathVariable("oid") int oid)
    {
        if(os.delete(oid) == true)
        {
            return new ResponseEntity<>(true,HttpStatus.OK);
        }
        return new ResponseEntity<>(false,HttpStatus.NOT_FOUND);
    }
   
}