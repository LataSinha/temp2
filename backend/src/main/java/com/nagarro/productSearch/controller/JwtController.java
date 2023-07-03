package com.nagarro.productSearch.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import com.nagarro.productSearch.helper.JwtUtil;
import com.nagarro.productSearch.model.JwtRequest;
import com.nagarro.productSearch.model.JwtResponse;
import com.nagarro.productSearch.service.CustomUserDetailsService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class JwtController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private CustomUserDetailsService customUserDetailsService;

    @Autowired
    private JwtUtil jwtUtil;

    @RequestMapping(value = "/token", method = RequestMethod.POST)
    public ResponseEntity<JwtResponse> generateToken(@RequestBody JwtRequest jwtRequest) throws Exception {
    	
        try {
           this.authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(jwtRequest.getUserId(),jwtRequest.getPassword()));
        } catch (UsernameNotFoundException e) {
            e.printStackTrace();
            throw new Exception("Bad Credentials");
        }catch (BadCredentialsException e) {
            e.printStackTrace();
            throw new Exception("Bad Credentials");
        }

        UserDetails userDetails = this.customUserDetailsService.loadUserByUsername(jwtRequest.getUserId());

        String token = this.jwtUtil.generateToken(userDetails);
        System.out.println("JWT " + token);
        return ResponseEntity.ok(new JwtResponse(token));

    }
}
