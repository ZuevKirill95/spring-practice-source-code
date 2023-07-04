package org.example.controller;

import lombok.extern.slf4j.Slf4j;
import org.example.entity.Book;
import org.example.service.BookService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@Slf4j
@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("books")
public class BookController {

    private final BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @PostMapping
    public ResponseEntity<Void> addBook(@RequestBody Book book) throws URISyntaxException {
        log.info("Добавление книги {}", book);

        long id = bookService.save(book);

        return ResponseEntity
                .created(new URI("http://localhost:8080/books/" + id))
                .build();
    }

    @GetMapping
    public List<Book> getBooks(@RequestParam(required = false) String name) {
        log.info("Поиск книг по имени {}", name);

        return bookService.findAll(name);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBook(@PathVariable long id) {
        boolean isDeleted = bookService.deleteById(id);

        if (isDeleted) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
