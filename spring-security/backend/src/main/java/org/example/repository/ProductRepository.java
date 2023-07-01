package org.example.repository;

import org.example.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    /**
     * Получает общую цену всех товаров.
     *
     * @return цена.
     */
    @Query("SELECT SUM(p.price) FROM Product p")
    long sumOfProducts();

    /**
     * Получает количество товаров меньше указанной цены.
     *
     * @param price цена товара.
     * @return количество товаров меньше указанной цены.
     */
    long countProductsByPriceLessThan(BigDecimal price);
}
