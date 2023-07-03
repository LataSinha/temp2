package com.nagarro.productSearch.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.nagarro.productSearch.model.Review;
import com.nagarro.productSearch.service.ReviewService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/reviews")
public class ReviewController {
	@Autowired
    private ReviewService reviewService;

    @PostMapping
    public ResponseEntity<Review> postReview(@RequestBody Review review) {
        Review postedReview = reviewService.postReview(review);
        return ResponseEntity.status(HttpStatus.CREATED).body(postedReview);
    }

    @PostMapping("/{reviewId}/approve")
    public ResponseEntity<String> approveReview(@PathVariable int reviewId) {
        try {
            reviewService.approveReview(reviewId);
            return ResponseEntity.ok("Review approved successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred");
        }
    }
}

