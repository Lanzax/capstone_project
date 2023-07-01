package com.capstone.project.securityw.service;

import com.capstone.project.securityw.payload.LoginDto;
import com.capstone.project.securityw.payload.RegisterDto;

public interface AuthService {
    
	String login(LoginDto loginDto);
    String register(RegisterDto registerDto);
    
}
