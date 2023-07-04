package org.example.service;

import org.example.entity.Book;
import org.example.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookServiceImpl implements BookService {
    private final BookRepository bookRepository;

    @Autowired
    public BookServiceImpl(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @Override
    public long save(Book book) {
        Book savedBook = bookRepository.save(book);

        return savedBook.getId();
    }

    @Override
    public List<Book> findAll(String name) {
        return bookRepository.findAll();
    }

    @Override
    public boolean deleteById(long id) {
        bookRepository.deleteById(id);

        return true;
    }
}
