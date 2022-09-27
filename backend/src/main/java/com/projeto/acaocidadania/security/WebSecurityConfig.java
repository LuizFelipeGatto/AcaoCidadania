package com.projeto.acaocidadania.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(
        securedEnabled = true,
        jsr250Enabled = true,
        prePostEnabled = true
)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
//    private final TokenProvider tokenProvider;
//
//    private final CustomUserDetailsService customUserDetailsService;

//    @Autowired
//    public WebSecurityConfig(TokenProvider tokenProvider, CustomUserDetailsService customUserDetailsService) {
//        this.tokenProvider = tokenProvider;
//        this.customUserDetailsService = customUserDetailsService;
//    }

//    @Override
//    public void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
//        authenticationManagerBuilder
//                .userDetailsService(customUserDetailsService)
//                .passwordEncoder(passwordEncoder());
//    }
//
//    @Bean
//    public PasswordEncoder passwordEncoder() {
//        return new SHA512Generator();
//    }

//    @Bean(BeanIds.AUTHENTICATION_MANAGER)
//    @Override
//    public AuthenticationManager authenticationManagerBean() throws Exception {
//        return super.authenticationManagerBean();
//    }

    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception {

        httpSecurity
                .cors()
                .and()
                .sessionManagement()
//                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .formLogin()
                .disable()
                .httpBasic()
                .disable()
                .exceptionHandling()
//                .authenticationEntryPoint(new RestAuthenticationEntryPoint())
                .and()
                .authorizeRequests()
                .antMatchers(
                        "/",
                        "/auth/**",
                        "/publico/**",
                        "/error",
                        "/favicon.ico",
                        "/webjars/**",
                        "/**/*.png",
                        "/**/*.gif",
                        "/**/*.svg",
                        "/**/*.jpg",
                        "/**/*.html",
                        "/**/*.css",
                        "/**/*.js",
                        "/**/*.otf",
                        "/**/*.ttf",
                        "/**/*.mp3",
                        "/**/*.jpeg",
                        "/**/*.pdf"
                )
                .permitAll()
                .anyRequest()
                .authenticated()
                .and()
//                .addFilterBefore(new TokenAuthenticationFilter(tokenProvider, customUserDetailsService),
//                        UsernamePasswordAuthenticationFilter.class)

                .csrf().disable();
    }
}
