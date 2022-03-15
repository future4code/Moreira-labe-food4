import {useState} from 'react';

const useForm = (initialValue) => {
    const [form, setForm] = useState(initialValue);

    const onChangeInput = (evt) => {
        const newValue = evt.target.value;
        const fieldName = evt.target.name;

        setForm({...form, [fieldName]: newValue});
    }

    return [form, onChangeInput];
};
export default useForm;