package com.example.repository;

import com.example.model.Product;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@Repository
public class LocalProductRepository implements ProductRepository {
    private List<Product> products = new ArrayList<>(List.of(
            new Product(1, "Яблоко", 50),
            new Product(2, "Арбуз", 150),
            new Product(3, "Персик", 30)
    ));

    @Override
    public long save(Product product) {
        long id = generateId();
        product.setId(id);

        products.add(product);
        return id;
    }

    @Override
    public Optional<Product> findById(long id) {
        return products.stream()
                .filter(product -> product.getId() == id)
                .findAny();
    }

    @Override
    public List<Product> findAll(String name) {
        if (name == null) {
            return products;
        }

        return products.stream()
                .filter(product -> product.getName().equals(name))
                .toList();
    }

    @Override
    public boolean update(Product product) {
        for (Product p : products) {
            if (p.getId() == product.getId()) {
                p.setName(product.getName());
                p.setPrice(product.getPrice());

                return true;
            }
        }

        return false;
    }

    @Override
    public boolean deleteById(long id) {
        return products.removeIf(product -> product.getId() == id);
    }

    private long generateId() {
        Random random = new Random();
        long low = 1;
        long high = 1_000_000;
        return random.nextLong(high - low) + low;
    }
}
