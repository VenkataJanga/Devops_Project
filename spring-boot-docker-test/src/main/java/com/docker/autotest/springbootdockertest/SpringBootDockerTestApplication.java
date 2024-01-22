package com.docker.autotest.springbootdockertest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories
public class SpringBootDockerTestApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootDockerTestApplication.class, args);
	}

}
