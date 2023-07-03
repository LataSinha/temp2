package com.nagarro.productSearch.model;

public class JwtRequest {
    String userId;
    String password;

    public JwtRequest() {
    }

    public JwtRequest(String userId, String password) {

        this.userId = userId;
        this.password = password;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "JwtRequest{" +
                "username='" + userId + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
