import React, { useState, useEffect } from "react";
import './Donate.css'
import Navbar2 from '../navbar/Navbar2'
import Address from "../Address/Address";
import locationpicker from '../../API/LocationPicker/locationpicker';
import HeartLoader from '../Loader/HeartLoader'

function Donate() {
    const [loader, setLoader] = useState(false);
    const [fileSelected, setFileSelected] = useState([]);
    const [addressPopUp, setAddressPopUp] = useState(false);
    const [addressType, setAddressType] = useState(true);
    const [errorDes, setErrorDes] = useState("");
    const maxImageLimit = 10;
    const uploadMultiFiles = (e) => {
        const files = Array.from(e.target.files);
        //Check the Limit
        if (fileSelected.length + files.length > maxImageLimit) {
            alert(`You can only upload up to ${maxImageLimit} images.`)
            return;
        }
        setFileSelected((prevFiles) => [...prevFiles, ...files]);
    };

    const removeImage = (index) => {
        // Create a shallow copy of the current fileSelected array
        const newFiles = [...fileSelected];

        // Use the splice method to remove one element at the specified index
        newFiles.splice(index, 1);

        // Update the fileSelected state with the new array that doesn't include the removed image
        setFileSelected(newFiles);
    }

    useEffect(() => {
        fileSelected.forEach((file, index) => {
            console.log(URL.createObjectURL(file), `Preview ${index}`);
        });
    }, [fileSelected]);

    let [address, setAddress] = useState([]);
    let [editAddress, setEditAddress] = useState([]);
    console.log("type: "+addressType);
    useEffect(() => {
        console.log("API calling")
        //API call for get user Address
        const addressData = [
            {
                id: '1',
                active: 1,
                AddressLine1: '22/7 tharamangalam',
                AddressLine2: 'omalur',
                city: 'salem',
                state: 'Tamilnadu',
                pinCode: 636306
            },
            {
                id: '1',
                active: 0,
                AddressLine1: '345 salem junction main road',
                AddressLine2: 'salem junction',
                city: 'salem',
                state: 'Tamilnadu',
                pinCode: 636306
            }
        ]
        setAddress(addressData)
    }, [])

    function addNew() {
        setEditAddress([]);
        setErrorDes("");
        setAddressType(false);
        setAddressPopUp(true)
    }
    const locationPicker = async () => {
        setLoader(true);
        try {
          const address = await locationpicker();
          setEditAddress(address);
          setAddressType(false);
          setErrorDes("Sometimes, the location is not picked correctly, so you can manually enter it.");
          setLoader(false);
          setAddressPopUp(true)
          console.log(address);
        } catch (error) {
          // Check if error is not null before accessing the message property
          console.error('Error getting location:', error && error.message);
        }
      };
      
      
    function edit(index) {
        setEditAddress(address[index]);
        setErrorDes("");
        setAddressType(true);
        setAddressPopUp(true)
    }
    
    return (
        <>
            <Navbar2 />
            <div className='main-donate'>
                <div className="image-upload-div">
                    <div className="image-upload-heading"><span><i class="fa-duotone fa-diamond-half"></i> Step 1: Add images</span></div>
                    <div className='image-upload-con'>
                        <div className='image-upload'>
                            {fileSelected.map((file, index) => (
                                <div className="image-preview" key={index}>
                                    <img src={URL.createObjectURL(file)} alt="..." />
                                    <button className="remove-image" onClick={() => removeImage(index)}><i class="fa-duotone fa-circle-xmark"></i></button>
                                </div>

                            ))}
                            <div class="upload-btn-wrapper">
                                <div>
                                    <button class="btn"><i class="fa-duotone fa-image"></i><i class="fa-solid fa-plus add-icon"></i></button>
                                    <input type="file" name="myfile" onChange={uploadMultiFiles} accept="image/*" multiple />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="donation-details-div">
                    <div className="donation-details-heading"><span><i class="fa-duotone fa-diamond-half"></i> Step 2: Add donation details</span></div>
                    <div className='donation-details'>
                        <div className="g-input-field-div-1">
                            <label className='g-lable-1'><i class="fa-regular fa-subtitles g-input-icon-1"></i></label>
                            <input type="text" name="title" id="title" className="g-input-field-1" placeholder="Title" />
                        </div>
                        <div className="g-input-field-div-1">
                            <label className='g-lable-1'><i class="fa-regular fa-lightbulb-on g-input-icon-1"></i></label>
                            <select name="product-condition" id="product-condition" className="g-input-field-1">
                                <option value="" style={{ display: "none" }}>Product Condition</option>
                                <option value={1}>Excellent</option>
                                <option value={2}>Good</option>
                                <option value={3}>Poor</option>
                            </select>
                        </div>
                        <div className="g-input-field-div-1">
                            <label className='g-lable-1'><i class="fa-solid fa-indent g-input-icon-1"></i></label>
                            <textarea id="description" className="g-input-field-1 email" placeholder="Description" rows={3}></textarea>
                        </div>
                    </div>
                </div>
                <div className="donation-details-div">
                    <div className="location-heading"><span><i class="fa-duotone fa-diamond-half"></i> Step 3: Add Location</span></div>
                    <div className='donation-details'>
                        {address.map((data, index) => (
                            <div className="address-display" key={index}>
                                <label class="plan basic-plan" for={"address-" + index}>
                                    <input type="radio" name="plan" id={"address-" + index} defaultChecked={data.active === 1 ? true : false}/>
                                    <div class="plan-content">
                                        <div className="plan-heading">
                                            <div>
                                                <span className="plan-head-p">Address {index + 1}</span>
                                            </div>
                                            <div className="plan-heading-right">
                                                <button className="address-edit-btn" onClick={() => edit(index)}><i class="fa-duotone fa-pen-to-square"></i></button>
                                                <button className="address-delete-btn"><i class="fa-duotone fa-trash"></i></button>
                                            </div>
                                        </div>
                                        <div class="plan-details">
                                            <p>{data.AddressLine1}, {data.AddressLine2}, {data.city}, {data.state}, {data.pinCode}</p>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        ))}
                        <div className="add-new-div">
                            <button className="g-btn-1 add-new" onClick={addNew}><i class="fa-duotone fa-octagon-plus"></i> Add Address</button>
                            <button className="g-btn-1 pick-location" onClick={locationPicker}><i class="fa-duotone fa-location-crosshairs"></i> Pick My Location</button>
                        </div>

                    </div>
                </div>
                <div className="donate-btn">
                    <button type='submit' className="g-btn-1">Donate</button>
                </div>

            </div>
            {loader && <HeartLoader loaderName={"Fetching your Location.."}/>}
            {addressPopUp && <Address setAddressPopUp={setAddressPopUp} id={editAddress.id} AddressLine1={editAddress.AddressLine1} AddressLine2={editAddress.AddressLine2} city={editAddress.city} state={editAddress.state} pinCode={editAddress.pinCode} type={addressType} note={errorDes} />}
        </>
    )
}

export default Donate