package services;

import model.AutoPayment;
import proxies.AutoPayNotificationProxy;
import repositories.AutoPayRepository;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;

public class AutoPayService {

  private final AutoPayRepository autoPayRepository;

  private final AutoPayNotificationProxy autoPayNotificationProxy;

  public AutoPayService(AutoPayRepository autoPayRepository,
                        AutoPayNotificationProxy autoPayNotificationProxy) {
    this.autoPayRepository = autoPayRepository;
    this.autoPayNotificationProxy = autoPayNotificationProxy;
  }

  public void sendReminder() {
    List<AutoPayment> autoPayments = autoPayRepository.getAutoPayments();

    autoPayments.forEach(autoPayment -> {
      if (autoPayment.getDate().getDayOfMonth() ==
              LocalDate.now().plus(1, ChronoUnit.DAYS).getDayOfMonth()) {
        autoPayNotificationProxy.sendNotification(autoPayment);
      }
    });
  }
}
