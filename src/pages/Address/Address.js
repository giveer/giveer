import React, { useEffect } from 'react'
import './Address.css'

function Address({setAddressPopUp, id, AddressLine1, AddressLine2, city="", state="", pinCode="", type=false, note=""}) {

    useEffect(() => {
        document.getElementById("city").value = city;
        document.getElementById("state").value = state;
        document.getElementById("pincode").value = pinCode;
    }, [])
    
    function hide() {
        setAddressPopUp(false);
    }
    return (
        <div className='main-address'>
            <div className='address-bg' onClick={hide}></div>
            <div className='address-pop-up'>
                <form>
                    <div>
                        <p className='pop-up-heading'>Address details</p>
                        <p className='note'>{note}</p>
                    </div>
                
                    <div className="g-input-field-div-1">
                        <label className='g-lable-1'><i class="fa-duotone fa-address-book g-input-icon-1"></i></label>
                        <textarea id="address1" className="g-input-field-1" placeholder="Street Address" rows={2}>{AddressLine1}</textarea>
                    </div>
                    <div className="g-input-field-div-1">
                        <label className='g-lable-1'><i class="fa-duotone fa-address-book g-input-icon-1"></i></label>
                        <textarea id="address2" className="g-input-field-1" placeholder="Address Line 2" rows={2}>{AddressLine2}</textarea>
                    </div>
                    <div className="g-input-field-div-1">
                        <label className='g-lable-1'><i class="fa-duotone fa-building g-input-icon-1"></i></label>
                        <input type="text" name="city" id="city" className="g-input-field-1" placeholder="City" />
                    </div>
                    <div className="g-input-field-div-1">
                        <label className='g-lable-1'><i class="fa-duotone fa-earth-americas g-input-icon-1"></i></label>
                        <input type="text" name="state" id="state" className="g-input-field-1" placeholder="State" />
                    </div>
                    <div className="g-input-field-div-1">
                        <label className='g-lable-1'><i class="fa-duotone fa-location-dot g-input-icon-1"></i></label>
                        <input type="number" name="pincode" id="pincode" className="g-input-field-1" placeholder="pincode" />
                    </div>
                    <div className={type?"display-none":""}>
                        <button type='submit' className="g-btn-1 pop-up-btn">Add Address</button>
                    </div>
                    <div className={type?"":"display-none"}>
                        <button type='submit' className="g-btn-1 pop-up-btn">Update Address</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Address