package com.example.urlshortener.service;

import com.example.urlshortener.exception.CodeAlreadyExist;
import com.example.urlshortener.exception.ShortUrlNotFoundException;
import com.example.urlshortener.model.ShortUrl;
import com.example.urlshortener.repository.ShortUrlRepository;
import com.example.urlshortener.util.RandomStringGenerator;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShortUrlService {
    private final ShortUrlRepository repository;
    private final RandomStringGenerator generator;

    public ShortUrlService(ShortUrlRepository repository, RandomStringGenerator generator) {
        this.repository = repository;
        this.generator = generator;
    }

    public List<ShortUrl> getAllShortUrl() {
        return repository.findAll();
    }

    public ShortUrl getUrlByCode(String code) {
        return repository.findAllByCode(code).orElseThrow(
                () -> new ShortUrlNotFoundException("url not found"));
    }

    public ShortUrl create(ShortUrl shortUrl) {
        if (shortUrl.getCode() == null || shortUrl.getCode().isEmpty()) {
            shortUrl.setCode(generateCode());
        } else if (repository.findAllByCode(shortUrl.getCode()).isPresent()) {
            throw new CodeAlreadyExist("code already exists");
        }

        shortUrl.setCode(shortUrl.getCode().toUpperCase());
        return repository.save(shortUrl);
    }

    private String generateCode() {
        String code;

        do{
            code = generator.generateRandomString();
        } while(repository.findAllByCode(code).isPresent());

        return code;
    }



}