package com.example.urlshortener.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.CONFLICT)
public class CodeAlreadyExist extends RuntimeException {
    public CodeAlreadyExist(String message) {
        super(message);
    }
}
