package com.nagarro.productSearch.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nagarro.productSearch.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
	
	public User findByEmail(String email);
    
}

