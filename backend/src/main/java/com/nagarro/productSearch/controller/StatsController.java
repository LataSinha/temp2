package com.nagarro.productSearch.controller;

import com.nagarro.productSearch.service.ProductService;
import com.nagarro.productSearch.service.ReviewService;
import com.nagarro.productSearch.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/stats")
public class StatsController {

	@Autowired
	private  UserService userService;
	@Autowired
    private ProductService productService;
	@Autowired
    private ReviewService reviewService;

    @GetMapping("/users/count")
    public ResponseEntity<Long> getUserCount() {
        Long userCount = userService.getUserCount();
        return ResponseEntity.ok(userCount);
    }

    @GetMapping("/products/count")
    public ResponseEntity<Long> getProductCount() {
        Long productCount = productService.getProductCount();
        return ResponseEntity.ok(productCount);
    }

    @GetMapping("/reviews/count")
    public ResponseEntity<Long> getReviewCount() {
        Long reviewCount = reviewService.getReviewCount();
        return ResponseEntity.ok(reviewCount);
    }
}

