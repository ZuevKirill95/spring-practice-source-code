package proxies;

import model.AutoPayment;

public interface AutoPayNotificationProxy {

  void sendNotification(AutoPayment autoPayment);
}
