package com.nagarro.productSearch.service;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import com.nagarro.productSearch.model.CustomUserDetails;
import com.nagarro.productSearch.model.User;
import com.nagarro.productSearch.repository.UserRepository;

@Service
public class CustomUserDetailsService implements UserDetailsService {

	@Autowired
	private UserRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String userId) throws UsernameNotFoundException {

		final User user = this.userRepository.findByEmail(userId);

		if (user == null) {
			throw new UsernameNotFoundException("User not found !!");
		} else {
			return new CustomUserDetails(user);
		}

	}
}
