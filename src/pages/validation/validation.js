export const isValidEmail = (val, fieldName) => {
    if (val !== "") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(val)) {
            return '';
        }else{
            return `${fieldName} is not valid`;
        }
    } else {
        return `${fieldName} is required`;
    }
};
export const isValidPassword = (val, fieldName) => {
    if (val !== "") {
        if (val.length < 5) {
            return `${fieldName} must be at least 5 characters`;
        }else{
            return '';
        }
    } else {
        return `${fieldName} is required`;
    }
};

