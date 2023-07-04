import {Button, Form, Input, InputNumber, Select} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {push, set} from "../slices/booksSlice";
import BookService from "../services/bookService";

const {Option} = Select;
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};
const CreateBookForm = () => {
    const dispatch = useDispatch()
    const [form] = Form.useForm();

    const onFinish = (values) => {
        BookService.createBook(values, dispatch);
    };

    const onReset = () => {
        form.resetFields();
    };

    return (
        <Form
            {...layout}
            form={form}
            name="control-hooks"
            onFinish={onFinish}
            style={{
                maxWidth: 600,
                padding: '20px 50px'
            }}
        >
            <Form.Item
                name="name"
                label="Название"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                name="author"
                label="Автор"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                name="year"
                label="Год"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <InputNumber/>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Создать
                </Button>
                <Button htmlType="button" onClick={onReset}>
                    Очистить
                </Button>

            </Form.Item>
        </Form>
    );
};
export default CreateBookForm;
