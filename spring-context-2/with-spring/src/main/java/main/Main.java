package main;

import proxies.SmsAutoPayNotificationProxy;
import repositories.DBAutoPayRepository;
import services.AutoPayService;

public class Main {

  public static void main(String[] args) {
    var autoPayRepository = new DBAutoPayRepository();
    var autoPayNotificationProxy = new SmsAutoPayNotificationProxy();

    var autoPayService = new AutoPayService(autoPayRepository, autoPayNotificationProxy);

    autoPayService.sendReminder();
  }
}
