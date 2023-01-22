export const validateFields = (fieldsToValidate) => {
    return fieldsToValidate.every((field) => field.value !== "");
    };