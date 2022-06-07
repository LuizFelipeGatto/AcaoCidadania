package com.projeto.acaocidadania.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

@Component
public class Config {

    public static String secret;
    public static String salt;
    public static String baseUrl;
    public static String baseUrlBack;
    public static String tokenApiNotificacao;
    public static String hashSeguranca;
    public static String email;
    public static String logo;
    public static String emailRecebimento;
    public static String emailRecebimento2;
    public static String emailEnvio;

    @Autowired
    public Config(Environment env) {
        secret = env.getProperty("security.oauth2.client.client-secret");
        salt = env.getProperty("salt");
        baseUrl = env.getProperty("url.base");
        tokenApiNotificacao = env.getProperty("safe2pay.tokenNotification");
        hashSeguranca =  env.getProperty("hash.seguranca");
        email = env.getProperty("spring.mail.username");
        logo = env.getProperty("logo");
        emailRecebimento = env.getProperty("email.recebimento.messagems");
        emailRecebimento2 = env.getProperty("email.recebimento.messagems2");
        emailEnvio = env.getProperty("email.envio.messagems");
        baseUrlBack = env.getProperty("url.base.backend");
    }
}
