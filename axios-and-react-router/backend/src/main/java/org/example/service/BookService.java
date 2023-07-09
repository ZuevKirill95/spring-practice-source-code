package org.example.service;

import org.example.entity.Book;

import java.util.List;

public interface BookService {
    long save(Book book);

    List<Book> findAll(String name);

    boolean deleteById(long id);
}
