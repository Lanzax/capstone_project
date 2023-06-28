package com.capstone.project.securityw.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capstone.project.securityw.entity.ERole;
import com.capstone.project.securityw.entity.Role;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    
	Optional<Role> findByRoleName(ERole roleName);

}
