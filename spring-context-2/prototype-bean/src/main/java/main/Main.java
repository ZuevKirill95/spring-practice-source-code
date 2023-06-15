package main;

import config.ProjectConfig;
import model.GenerateData;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import services.PdfDocService;

public class Main {

  public static void main(String[] args) {
    var c = new AnnotationConfigApplicationContext(ProjectConfig.class);

    var pdfDocService = c.getBean(PdfDocService.class);

    pdfDocService.generate(new GenerateData());
    pdfDocService.generate(new GenerateData());
  }
}
