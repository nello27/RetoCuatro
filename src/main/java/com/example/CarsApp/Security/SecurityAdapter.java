package com.example.CarsApp.Security;

import org.springframework.http.HttpStatus;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;
import org.springframework.web.bind.annotation.RestController;

@RestController
@EnableWebSecurity
public class SecurityAdapter extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests(
                a -> a.antMatchers("/**", "/error", "/webjars/**", "/api/**","/h2-console/**").permitAll().anyRequest().authenticated()
        ).headers().frameOptions().sameOrigin() // Permitir la carga del iframe de H2 en la misma página
                .and()
                .csrf().disable()
        .exceptionHandling(
                e -> e.authenticationEntryPoint(new HttpStatusEntryPoint(HttpStatus.FORBIDDEN))
        ).oauth2Login().defaultSuccessUrl("/", true);

        http.cors().and().csrf().disable();
        
    }

}
