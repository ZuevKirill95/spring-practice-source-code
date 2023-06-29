package org.example.repository;

import org.example.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
public class DBProductRepository implements ProductRepository {
    public static final String JDBC = "jdbc:postgresql://localhost:5432/postgres?user=postgres&password=root";

    private final JdbcTemplate jdbcTemplate;


    @Autowired
    public DBProductRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public long save(Product product) {
        var insertSql = "INSERT INTO PRODUCT (name, price) VALUES (?,?);";
        KeyHolder keyHolder = new GeneratedKeyHolder();

        jdbcTemplate.update(connection -> {
            var prepareStatement = connection.prepareStatement(insertSql, Statement.RETURN_GENERATED_KEYS);
            prepareStatement.setString(1, product.getName());
            prepareStatement.setDouble(2, product.getPrice().doubleValue());

            return prepareStatement;
        }, keyHolder);

        return (long) (int) keyHolder.getKeys().get("id");
    }

    @Override
    public Optional<Product> findById(long productId) {
        var selectSql = "SELECT * FROM product where id = ?";

        PreparedStatementCreator preparedStatement = con -> {
            PreparedStatement ps = con.prepareStatement(selectSql);
            ps.setLong(1, productId);

            return ps;
        };

        RowMapper<Product> productRowMapper = (resultSet, rowNum) -> {
            int id = resultSet.getInt("id");
            String name = resultSet.getString("name");
            double price = resultSet.getDouble("price");

            return new Product(id, name, BigDecimal.valueOf(price));
        };

        List<Product> products = jdbcTemplate.query(preparedStatement, productRowMapper);

        return products.stream().findFirst();
    }

    @Override
    public List<Product> findAll(String productName) {
        var selectSql = "SELECT * FROM PRODUCT where name like ?";

        PreparedStatementCreator preparedStatement = con -> {
            PreparedStatement ps = con.prepareStatement(selectSql);
            ps.setString(1, "%" + (productName == null ? "" : productName) + "%");

            return ps;
        };

        RowMapper<Product> productRowMapper = (resultSet, rowNum) -> {
            int id = resultSet.getInt("id");
            String name = resultSet.getString("name");
            double price = resultSet.getDouble("price");

            return new Product(id, name, BigDecimal.valueOf(price));
        };

        return jdbcTemplate.query(preparedStatement, productRowMapper);
    }

    @Override
    public boolean deleteById(long id) {
        var deleteSql = "DELETE FROM PRODUCT where id = ?";

        PreparedStatementCreator preparedStatement = con -> {
            PreparedStatement ps = con.prepareStatement(deleteSql);
            ps.setLong(1, id);

            return ps;
        };

        int rows = jdbcTemplate.update(preparedStatement);

        return rows > 0;
    }

    @Override
    public boolean update(Product product) {
        var updateSql = """
                UPDATE PRODUCT
                SET 
                name = ?,
                price = ?
                where id = ?;
                """;

        PreparedStatementCreator preparedStatement = con -> {
            PreparedStatement ps = con.prepareStatement(updateSql);
            ps.setString(1, product.getName());
            ps.setDouble(2, product.getPrice().doubleValue());
            ps.setLong(3, product.getId());

            return ps;
        };

        int rows = jdbcTemplate.update(preparedStatement);

        return rows > 0;
    }
}
