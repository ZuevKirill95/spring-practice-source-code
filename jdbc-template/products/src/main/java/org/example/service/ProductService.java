package org.example.service;

import org.example.entity.Product;

import java.util.List;
import java.util.Optional;

public interface ProductService {
    long save(Product product);

    Optional<Product> findById(long id);

    List<Product> findAll(String name);

    boolean update(Product product);

    boolean deleteById(long id);
}
