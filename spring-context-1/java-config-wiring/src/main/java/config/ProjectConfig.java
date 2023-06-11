package config;

import beans.Parrot;
import beans.Person;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ProjectConfig {

    @Bean
    public Parrot parrot() {
        Parrot p = new Parrot();
        p.setName("Koko");
        return p;
    }

    // 1 способ связать человека и попугая
    @Bean
    public Person person() {
        Person p = new Person();
        p.setName("Ella");
        p.setParrot(parrot());
        return p;
    }

    // 2 способ связать человека и попугая
//    @Bean
//    public Person person(Parrot parrot) {
//        Person p = new Person();
//        p.setName("Ella");
//        p.setParrot(parrot);
//        return p;
//    }
}
