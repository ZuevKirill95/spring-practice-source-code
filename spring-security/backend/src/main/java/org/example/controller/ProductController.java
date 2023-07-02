package org.example.controller;

import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.IOUtils;
import org.example.entity.Product;
import org.example.service.ProductService;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;


@Slf4j
@RestController
@RequestMapping("products")
@CrossOrigin(origins = "*", maxAge = 3600)
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> addProduct(@RequestBody Product product) throws URISyntaxException {
        log.info("Добавление продукта {}", product);

        long id = productService.save(product);

        return ResponseEntity
                .created(new URI("http://localhost:8080/products/" + id))
                .build();
    }

    @GetMapping
    public List<Product> getProducts(@RequestParam(required = false) String name) {
        log.info("Поиск продуктов по имени {}", name);

        return productService.findAll(name);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> getProducts(@PathVariable long id) {
        Optional<Product> product = productService.findById(id);

        if (product.isPresent()) {
            return ResponseEntity.ok().body(product.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping
    @PreAuthorize("hasRole('ADMIN')")
    public Product updateProduct(@RequestBody Product product) {
        productService.update(product);

        return product;
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> deleteProduct(@PathVariable long id) {
        boolean isDeleted = productService.deleteById(id);

        if (isDeleted) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping(
            value = "/images/{imageName}",
            produces = MediaType.IMAGE_PNG_VALUE
    )
    public @ResponseBody byte[] getImageWithMediaType(@PathVariable String imageName) throws IOException {
        InputStream in = getClass()
                .getResourceAsStream("/images/" + imageName);
        return IOUtils.toByteArray(in);
    }
}
