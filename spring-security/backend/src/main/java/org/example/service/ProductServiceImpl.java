package org.example.service;

import org.apache.commons.io.IOUtils;
import org.example.entity.Product;
import org.example.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService {
    private final ProductRepository productRepository;

    @Autowired
    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public long save(Product product) {
        Product savedProduct = productRepository.save(product);

        return savedProduct.getId();
    }

    @Override
    public Optional<Product> findById(long id) {
        return productRepository.findById(id);
    }

    @Override
    public List<Product> findAll(String name) {
        return productRepository.findAll();
    }

    @Override
    public boolean update(Product product) {
        productRepository.save(product);

        return true;
    }

    @Override
    public boolean deleteById(long id) {
        productRepository.deleteById(id);

        return true;
    }
}
