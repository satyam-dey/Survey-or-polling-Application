package com.example.demo.util;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys; // Import Keys
import org.springframework.stereotype.Component;

import java.security.Key; // Import Key
import java.util.Date;
import java.nio.charset.StandardCharsets;

import io.jsonwebtoken.Claims;

@Component
public class JwtUtil {
    private final String SECRET_KEY = "your_super_secret_key_that_is_long_and_secure_and_at_least_256_bits";

    // Create a Key object from the secret string
    private Key getSigningKey() {
        byte[] keyBytes = SECRET_KEY.getBytes(StandardCharsets.UTF_8);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    public String generateToken(String username) {
        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10)) // 10 hours
                .signWith(getSigningKey()) // Use the new Key object
                .compact();
    }

    public String extractUsername(String token) {
        return Jwts.parserBuilder().setSigningKey(getSigningKey()).build().parseClaimsJws(token).getBody().getSubject();
    }
}