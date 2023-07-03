package com.nagarro.productSearch.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagarro.productSearch.model.Product;
import com.nagarro.productSearch.repository.ProductRepository;

import java.util.List;

@Service
public class ProductService {

	@Autowired
    private ProductRepository productRepository;

    public Product addProduct(Product product) {
        return productRepository.save(product);
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public List<Product> getProductsByName(String name) {
        return productRepository.findByName(name);
    }

    public Product getProductByCode(String code) {
        return productRepository.findByCode(code);
    }
    
    public Long getProductCount() {
        return productRepository.count();
    }
}

