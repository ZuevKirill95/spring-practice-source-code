import model.AutoPayment;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import proxies.AutoPayNotificationProxy;
import repositories.AutoPayRepository;
import services.AutoPayService;

import static org.mockito.Matchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;

public class AppTests {

    @Test
    @DisplayName("Verify that CommentService correctly delegates the " +
            "responsibilities to the repository and proxy objects.")
    public void testCommentService() {
        var autoPayRepository = mock(AutoPayRepository.class);
        var autoPayNotificationProxy = mock(AutoPayNotificationProxy.class);

        var commentService = new AutoPayService(autoPayRepository, autoPayNotificationProxy);

        commentService.sendReminder();

        verify(autoPayRepository).getAutoPayments();
        verify(autoPayNotificationProxy).sendNotification(any(AutoPayment.class));
    }

}
