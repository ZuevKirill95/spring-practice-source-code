package ru.sber.practice;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import ru.sber.practice.config.ProjectConfig;

public class Main {
    public static void main(String[] args) {
        var context = new AnnotationConfigApplicationContext(ProjectConfig.class);

        var parrotBean = context.getBean(Parrot.class);

        System.out.println(parrotBean.getName());
    }
}