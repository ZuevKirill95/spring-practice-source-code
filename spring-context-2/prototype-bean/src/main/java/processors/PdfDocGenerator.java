package processors;

import model.GenerateData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
import repositories.PdfDocumentRepository;

@Component
@Scope(BeanDefinition.SCOPE_PROTOTYPE)
public class PdfDocGenerator {

    public PdfDocGenerator() {
        System.out.println("Создание объекта PdfDocGenerator");
    }

    @Autowired
    private PdfDocumentRepository pdfDocumentRepository;

    private GenerateData generateData;

    public void setGenerateData(GenerateData generateData) {
        this.generateData = generateData;
    }

    public GenerateData getGenerateData() {
        return this.generateData;
    }

    public void generatePdfDoc() {
        // Генерация PDF документа
        // Сохранение результат в БД с помощью класса PdfDocumentRepository
    }
}
