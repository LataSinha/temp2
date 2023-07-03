package com.nagarro.productSearch.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagarro.productSearch.model.User;
import com.nagarro.productSearch.repository.UserRepository;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
	@Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserByEmail(String email) {
        Optional<User> userOptional = userRepository.findById(email);
        return userOptional.orElse(null);
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public Long getUserCount() {
        return userRepository.count();
    }
}
