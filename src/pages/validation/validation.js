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
//Confirm password checking function
export const isValidConfirmPassword = (val, fieldname) => {
    if (val !== '') {
        if (val != document.querySelector('input[name="password"]').value) {
            return 'Passwords do not match';
        } else {
            return '';
        }
    } else {
        return 'Confirmation is required';
    }
}

