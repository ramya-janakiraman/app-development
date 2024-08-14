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

import com.example.backend.model.AddWish;
import com.example.backend.service.AddWishService;



@RestController
@RequestMapping("/api/addwish")
public class AddWishController {
    @Autowired
    AddWishService as;
    @PostMapping("/post/categorytype")
@PreAuthorize("hasAuthority('USER')")
public ResponseEntity<AddWish> addElements(@RequestBody AddWish addWish) {
    AddWish savedWish = as.create(addWish);
    return new ResponseEntity<>(savedWish, HttpStatus.CREATED);
}

    @GetMapping("/get/categorytype")
    @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    public ResponseEntity<List<AddWish>> showinfo()
    {
        return new ResponseEntity<>(as.getAll(),HttpStatus.OK);
    }
    @GetMapping("/get/categorytype/{cid}")
    @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    public ResponseEntity<AddWish> getById(@PathVariable Integer cid)
    {
        AddWish obj=as.getId(cid);
        return new ResponseEntity<>(obj,HttpStatus.OK);
    }
    @PutMapping("/put/{cid}")
    @PreAuthorize("hasAuthority('USER')")
    public ResponseEntity<AddWish> putMethodName(@PathVariable("cid") int cid, @RequestBody AddWish a) {
        if(as.update(cid,a) == true)
        {
            return new ResponseEntity<>(a,HttpStatus.OK);
        }
        
        return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
    }
    @DeleteMapping("/delete/{cid}")
    @PreAuthorize("hasAuthority('USER')")
    public ResponseEntity<Boolean> delete(@PathVariable("cid") int cid)
    {
        if(as.delete(cid) == true)
        {
            return new ResponseEntity<>(true,HttpStatus.OK);
        }
        return new ResponseEntity<>(false,HttpStatus.NOT_FOUND);
    }
   
}