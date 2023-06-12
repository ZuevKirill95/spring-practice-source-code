package repositories;

import model.AutoPayment;

import java.util.List;

public interface AutoPayRepository {

  List<AutoPayment> getAutoPayments();
}
