package com.nagarro.productSearch.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.nagarro.productSearch.model.Product;
import com.nagarro.productSearch.service.ProductService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/products")
public class ProductController {

	@Autowired
    private ProductService productService;

	@PostMapping
	public ResponseEntity<Product> addProduct(@RequestBody Product product) {
	    String productCode = product.getCode();
	    Product existingProduct = productService.getProductByCode(productCode);
	    if (existingProduct != null) {
	        return ResponseEntity.status(HttpStatus.CONFLICT)
	                .body(null); 
	    }
	    
	    Product addedProduct = productService.addProduct(product);
	    return ResponseEntity.status(HttpStatus.CREATED).body(addedProduct);
	}


    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> products = productService.getAllProducts();
        return ResponseEntity.ok(products);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Product>> searchProductsByName(@RequestParam("name") String name) {
        List<Product> products = productService.getProductsByName(name);
        return ResponseEntity.ok(products);
    }

    @GetMapping("/{code}")
    public ResponseEntity<Product> getProductByCode(@PathVariable("code") String code) {
        Product product = productService.getProductByCode(code);
        if (product != null) {
            return ResponseEntity.ok(product);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

