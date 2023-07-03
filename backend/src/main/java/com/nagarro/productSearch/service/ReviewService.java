package com.nagarro.productSearch.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagarro.productSearch.model.Review;
import com.nagarro.productSearch.repository.ReviewRepository;

@Service
public class ReviewService {
	@Autowired
	private ReviewRepository reviewRepository;

	boolean approved;

	public Review postReview(Review review) {
		return reviewRepository.save(review);
	}

	public boolean approveReview(int reviewId) {
		Optional<Review> optionalReview = reviewRepository.findById(reviewId);
		if (optionalReview.isPresent()) {
			Review review = optionalReview.get();
			reviewRepository.save(review);
			return true;
		} else {
			return false;
		}
	}

	public Long getReviewCount() {
		return reviewRepository.count();
	}

}
