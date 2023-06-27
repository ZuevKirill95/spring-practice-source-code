package org.example.service;

import org.example.entity.Product;

import java.math.BigDecimal;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class ProductRepository {
    public List<String> getProductNames() throws SQLException {
        ArrayList<String> names = new ArrayList<>();
        var url = "jdbc:postgresql://localhost:5432/postgres?user=postgres&password=root";
        try (var connection = DriverManager.getConnection(url);
             var prepareStatement = connection.prepareStatement("SELECT name FROM Product");
             var resultSet = prepareStatement.executeQuery()) {
            while (resultSet.next()) {
                names.add(resultSet.getString(1));
            }
        }

        return names;
    }

    public void showConnection() throws SQLException {
        try (Connection conn = DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres?user=postgres&password=root")) {
            System.out.println(conn);
        }
    }

    public void showPreparedStatement() throws SQLException {
        try (Connection conn = DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres?user=postgres&password=root"); PreparedStatement ps = conn.prepareStatement("SELECT name FROM Product")) {
            System.out.println(ps);
        }
    }

    public void insertUpdateDelete() throws SQLException {
        var url = "jdbc:postgresql://localhost:5432/postgres?user=postgres&password=root";
        var insertSql = "INSERT INTO PRODUCT VALUES (1, 'IPhone', 999, 3);";
        var updateSql = "UPDATE PRODUCT SET price = price - PRODUCT.price * 0.2 where name = 'IPhone'";
        var deleteSql = "DELETE FROM PRODUCT where name = 'IPhone'";

        try (var connection = DriverManager.getConnection(url)) {
            try (var ps = connection.prepareStatement(insertSql)) {
                int result = ps.executeUpdate();
                System.out.println(result); // 1
            }

            try (var ps = connection.prepareStatement(updateSql)) {
                int result = ps.executeUpdate();
                System.out.println(result); // 0
            }

            try (var ps = connection.prepareStatement(deleteSql)) {
                int result = ps.executeUpdate();
                System.out.println(result); // 1
            }
        }
    }

    public void addProduct(int id, String name, BigDecimal price, int count) throws SQLException {
        var url = "jdbc:postgresql://localhost:5432/postgres?user=postgres&password=root";
        var insertSql = "INSERT INTO PRODUCT VALUES (?,?,?,?);";

        try (var connection = DriverManager.getConnection(url);
             var prepareStatement = connection.prepareStatement(insertSql)) {
            prepareStatement.setInt(1, id);
            prepareStatement.setString(2, name);
            prepareStatement.setDouble(3, price.doubleValue());
            prepareStatement.setInt(4, count);

            prepareStatement.executeUpdate();
        }
    }

    public List<Product> getProducts() throws SQLException {
        var url = "jdbc:postgresql://localhost:5432/postgres?user=postgres&password=root";
        var selectSql = "SELECT * FROM PRODUCT";
        List<Product> products = new ArrayList<>();

        try (var connection = DriverManager.getConnection(url);
             var prepareStatement = connection.prepareStatement(selectSql)) {

            var resultSet = prepareStatement.executeQuery();
            while (resultSet.next()) {
                int id = resultSet.getInt("id");
                String name = resultSet.getString("name");
                double price = resultSet.getDouble("price");
                int count = resultSet.getInt("count");
                Product product = new Product(id, name, BigDecimal.valueOf(price), count);

                products.add(product);
            }

            return products;
        }
    }
}
