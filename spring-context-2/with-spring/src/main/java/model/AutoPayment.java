package model;

import java.math.BigDecimal;
import java.time.LocalDate;

public class AutoPayment {

  private String organization;
  private BigDecimal sum;
  private LocalDate date;

  public AutoPayment(String organization, BigDecimal sum, LocalDate date) {
    this.organization = organization;
    this.sum = sum;
    this.date = date;
  }

  public LocalDate getDate() {
    return date;
  }

  public BigDecimal getSum() {
    return sum;
  }

  public String getOrganization() {
    return organization;
  }
}
