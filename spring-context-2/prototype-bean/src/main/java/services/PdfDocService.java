package services;

import model.GenerateData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Service;
import processors.PdfDocGenerator;

@Service
public class PdfDocService {

    @Autowired
    private ApplicationContext context;

    public void generate(GenerateData c) {
        PdfDocGenerator p = context.getBean(PdfDocGenerator.class);

        p.setGenerateData(c);

        // сделать что-то ещё
    }

}
