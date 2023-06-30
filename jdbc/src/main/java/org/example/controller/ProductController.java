package org.example.controller;

import lombok.extern.slf4j.Slf4j;
import org.example.entity.Product;
import org.example.repository.ProductRepository;
import org.example.service.ProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Slf4j
@RestController
@RequestMapping("products")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping
    public long addProduct(@RequestBody Product product) {
        log.info("Добавление продукта {}", product);

        return productService.save(product);
    }

    @GetMapping
    public List<Product> getProducts(@RequestParam(required = false) String name) {
        log.info("Поиск продуктов по имени {}", name);

        return productService.findAll(name);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> getProducts(@PathVariable long id) {
        log.info("Поиск продукта по идентификатору {}", id);

        Optional<Product> product = productService.findById(id);

        return product.isPresent()
                ? ResponseEntity.ok().body(product.get())
                : ResponseEntity.notFound().build();
    }

    @PutMapping
    public Product updateProduct(@RequestBody Product product) {
        log.info("Обновление продукта {}", product);

        productService.update(product);

        return product;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable long id) {
        log.info("Удаление продукта по идентификатору {}", id);

        boolean isDeleted = productService.deleteById(id);

        return isDeleted
                ? ResponseEntity.noContent().build()
                : ResponseEntity.notFound().build();
    }
}
