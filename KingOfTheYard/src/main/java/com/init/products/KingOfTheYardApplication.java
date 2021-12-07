package com.init.products;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;


@SpringBootApplication
@Configuration
@EnableWebSocketMessageBroker
public class KingOfTheYardApplication {

	public static void main(String[] args) {
		SpringApplication.run(KingOfTheYardApplication.class, args);
	}


}