package main;

import config.ProjectConfig;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import proxies.SmsAutoPayNotificationProxy;
import repositories.DBAutoPayRepository;
import services.AutoPayService;

public class Main {

  public static void main(String[] args) {
    var context = new AnnotationConfigApplicationContext(ProjectConfig.class);

    var autoPayService = context.getBean(AutoPayService.class);
    autoPayService.sendReminder();
  }
}
