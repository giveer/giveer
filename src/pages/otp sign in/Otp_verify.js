import './Otp_verify.css';
import { ReactComponent as DonationIcon } from '../../assets/svg/donation.svg';

function Otp_verify() {
    // const inputs = document.getElementsByClassName("number");
    const inputs = document.querySelectorAll(".num");
    const button = document.querySelector("button");

    // iterate over all inputs
    inputs.forEach((input, index1) => {
        input.addEventListener("keyup", (e) => {
            // This code gets the current input element and stores it in the currentInput variable
            // This code gets the next sibling element of the current input element and stores it in the nextInput variable
            // This code gets the previous sibling element of the current input element and stores it in the prevInput variable
            const currentInput = input;
            const nextInput = input.nextElementSibling;
            const prevInput = input.previousElementSibling;

            // if the value has more than one character then clear it
            if (currentInput.value.length > 1) {
                currentInput.value = "";
                return;
            }
            // if the next input is disabled and the current value is not empty
            //  enable the next input and focus on it
            if (nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== "") {
                nextInput.removeAttribute("disabled");
                nextInput.focus();
            }

            // if the backspace key is pressed
            if (e.key === "Backspace") {
                // iterate over all inputs again
                inputs.forEach((input, index2) => {
                    // if the index1 of the current input is less than or equal to the index2 of the input in the outer loop
                    // and the previous element exists, set the disabled attribute on the input and focus on the previous element
                    if (index1 <= index2 && prevInput) {
                        input.setAttribute("disabled", true);
                        input.value = "";
                        prevInput.focus();
                    }
                });
            }
            //if the sixth input( which index number is 5) is not empty and has not disable attribute then
            //add active class if not then remove the active class.
            if (!inputs[5].disabled && inputs[5].value !== "") {
                button.classList.add("active");
                return;
            }
            button.classList.remove("active");
        });
    });

    //focus the first input which index is 0 on window load
    document.addEventListener("load", () => inputs[0].focus());
    console.log("length "+inputs.length);

    return (
        <div className="center-div">
            <div className='container'>
                <div className="container-1">
                    <h4 className='g-h-4'>Enter OTP Code</h4>
                    <form action="">
                        <div className="input-field">
                            <input className="num" type="number" />
                            <input className="num" type="number" disabled />
                            <input className="num" type="number" disabled />
                            <input className="num" type="number" disabled />
                            <input className="num" type="number" disabled />
                            <input className="num" type="number" disabled />
                        </div>
                        <div className="g-input-field-div-1">
                            <button type="submit" className='g-btn-1'>Verify OTP</button>
                        </div>
                    </form>
                    <div className='bts'>
                        <a className='bts' href="signin">Back to Signin</a>
                    </div>
                </div>
                <div className='container-2'>
                    <DonationIcon />
                </div>
            </div>
        </div>
    );
}

export default Otp_verify;