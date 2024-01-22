package com.docker.autotest.springbootdockertest.repository;

import com.docker.autotest.springbootdockertest.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student,Integer> {
}