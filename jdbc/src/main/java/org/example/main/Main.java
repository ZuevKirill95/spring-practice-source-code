package org.example.main;

import org.example.entity.Product;
import org.example.service.CartRepository;
import org.example.service.ProductRepository;

import java.sql.SQLException;
import java.util.List;

public class Main {
    public static void main(String[] args) throws SQLException {
        ProductRepository productRepository = new ProductRepository();
        List<String> productNames = productRepository.getProductNames();

        System.out.println(productNames);
    }
}
