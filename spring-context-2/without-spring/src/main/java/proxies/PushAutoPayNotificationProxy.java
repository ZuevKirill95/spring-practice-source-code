package proxies;

import model.AutoPayment;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Primary
@Component
public class PushAutoPayNotificationProxy implements AutoPayNotificationProxy {

    @Override
    public void sendNotification(AutoPayment autoPayment) {
        System.out.println("PUSH: Завтра будет выполнен автоплатеж " + autoPayment.getOrganization()
                + " на сумму " + autoPayment.getSum() + " руб.");
    }
}
