package repositories;

import model.AutoPayment;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Repository
public class DBAutoPayRepository implements AutoPayRepository {

    @Override
    public List<AutoPayment> getAutoPayments() {
        System.out.println("Получение списка автоплатежей из БД");

        return List.of(
                new AutoPayment("Горводоканал", BigDecimal.valueOf(1000), LocalDate.of(2023, 6, 23)),
                new AutoPayment("МТС", BigDecimal.valueOf(1000), LocalDate.of(2023, 6, 13)),
                new AutoPayment("Ростелеком", BigDecimal.valueOf(1000), LocalDate.of(2023, 6, 7))
        );
    }
}
