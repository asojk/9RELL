import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import PropTypes from 'prop-types';
import bookButtons from './book-buttons';

const Contact = ({
  heading,
  textinputPlaceholder,
  textinputPlaceholder1,
  textinputPlaceholder2,
  textinputPlaceholder3,
  textinputPlaceholder4,
  BuildingType,
  Application,
}) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_caqlar9',
        'template_7a6btu8',
        form.current,
        'KfKbChHKxtJr4p331'
      )
      .then(
        (result) => {
          console.log('Form submitted successfully:', result.data);
          // Clear the input fields after a successful submission
          setName('');
          setEmail('');
          setPhone('');
          setDate('');
          setNotes('');
          setBuildingType('Commercial');
          setApplication('New Construction');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const [buildingType, setBuildingType] = useState('NA');
  const [application, setApplication] = useState('NA');

  return (
    <div className="contact-container">
      <h2 className="head">{heading}</h2>
      <span className="subhead">or</span>
      <div className="grid grid-cols-2 grid-rows-1 gap-12" style={{zIndex: "99"}}>
    <div >
    <a className="comic-button3" href="tel:+18002089693">
    <svg
      className="phone"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M13.941 17.0625C13.0935 17.0625 12.201 16.86 11.2785 16.47C10.3785 16.0875 9.47102 15.5625 8.58602 14.925C7.70852 14.28 6.86102 13.56 6.05852 12.7725C5.26352 11.97 4.54352 11.1225 3.90602 10.2525C3.26102 9.3525 2.74352 8.4525 2.37602 7.5825C1.98602 6.6525 1.79102 5.7525 1.79102 4.905C1.79102 4.32 1.89602 3.765 2.09852 3.2475C2.30852 2.715 2.64602 2.22 3.10352 1.7925C3.68102 1.2225 4.34102 0.9375 5.04602 0.9375C5.33852 0.9375 5.63852 1.005 5.89352 1.125C6.18602 1.26 6.43352 1.4625 6.61352 1.7325L8.35352 4.185C8.51102 4.4025 8.63102 4.6125 8.71352 4.8225C8.81102 5.0475 8.86352 5.2725 8.86352 5.49C8.86352 5.775 8.78102 6.0525 8.62352 6.315C8.51102 6.5175 8.33852 6.735 8.12102 6.9525L7.61102 7.485C7.61852 7.5075 7.62602 7.5225 7.63352 7.5375C7.72352 7.695 7.90352 7.965 8.24852 8.37C8.61602 8.79 8.96102 9.1725 9.30602 9.525C9.74852 9.96 10.116 10.305 10.461 10.59C10.8885 10.95 11.166 11.13 11.331 11.2125L11.316 11.25L11.8635 10.71C12.096 10.4775 12.321 10.305 12.5385 10.1925C12.951 9.9375 13.476 9.8925 14.001 10.11C14.196 10.1925 14.406 10.305 14.631 10.4625L17.121 12.2325C17.3985 12.42 17.601 12.66 17.721 12.945C17.8335 13.23 17.886 13.4925 17.886 13.755C17.886 14.115 17.8035 14.475 17.646 14.8125C17.4885 15.15 17.2935 15.4425 17.046 15.7125C16.6185 16.185 16.1535 16.5225 15.6135 16.74C15.096 16.95 14.5335 17.0625 13.941 17.0625ZM5.04602 2.0625C4.63352 2.0625 4.25102 2.2425 3.88352 2.6025C3.53852 2.925 3.29852 3.2775 3.14852 3.66C2.99102 4.05 2.91602 4.4625 2.91602 4.905C2.91602 5.6025 3.08102 6.36 3.41102 7.14C3.74852 7.935 4.22102 8.76 4.82102 9.585C5.42102 10.41 6.10352 11.2125 6.85352 11.97C7.60352 12.7125 8.41352 13.4025 9.24602 14.01C10.056 14.6025 10.8885 15.0825 11.7135 15.4275C12.996 15.975 14.196 16.1025 15.186 15.69C15.5685 15.5325 15.906 15.2925 16.2135 14.9475C16.386 14.76 16.521 14.5575 16.6335 14.3175C16.7235 14.13 16.7685 13.935 16.7685 13.74C16.7685 13.62 16.746 13.5 16.686 13.365C16.6635 13.32 16.6185 13.2375 16.476 13.14L13.986 11.37C13.836 11.265 13.701 11.19 13.5735 11.1375C13.4085 11.07 13.341 11.0025 13.086 11.16C12.936 11.235 12.801 11.3475 12.651 11.4975L12.081 12.06C11.7885 12.345 11.3385 12.4125 10.9935 12.285L10.791 12.195C10.4835 12.03 10.1235 11.775 9.72602 11.4375C9.36602 11.13 8.97602 10.77 8.50352 10.305C8.13602 9.93 7.76852 9.5325 7.38602 9.09C7.03352 8.6775 6.77852 8.325 6.62102 8.0325L6.53102 7.8075C6.48602 7.635 6.47102 7.5375 6.47102 7.4325C6.47102 7.1625 6.56852 6.9225 6.75602 6.735L7.31852 6.15C7.46852 6 7.58102 5.8575 7.65602 5.73C7.71602 5.6325 7.73852 5.55 7.73852 5.475C7.73852 5.415 7.71602 5.325 7.67852 5.235C7.62602 5.115 7.54352 4.98 7.43852 4.8375L5.69852 2.3775C5.62352 2.2725 5.53352 2.1975 5.42102 2.145C5.30102 2.0925 5.17352 2.0625 5.04602 2.0625ZM11.316 11.2575L11.196 11.7675L11.3985 11.2425C11.361 11.235 11.331 11.2425 11.316 11.2575Z" />
    </svg>
    <span>Call</span>
  </a>
    </div>
    <div >
    <a className="comic-button4" href="tel:+18002089693">
    <svg
      className="phone"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M13.941 17.0625C13.0935 17.0625 12.201 16.86 11.2785 16.47C10.3785 16.0875 9.47102 15.5625 8.58602 14.925C7.70852 14.28 6.86102 13.56 6.05852 12.7725C5.26352 11.97 4.54352 11.1225 3.90602 10.2525C3.26102 9.3525 2.74352 8.4525 2.37602 7.5825C1.98602 6.6525 1.79102 5.7525 1.79102 4.905C1.79102 4.32 1.89602 3.765 2.09852 3.2475C2.30852 2.715 2.64602 2.22 3.10352 1.7925C3.68102 1.2225 4.34102 0.9375 5.04602 0.9375C5.33852 0.9375 5.63852 1.005 5.89352 1.125C6.18602 1.26 6.43352 1.4625 6.61352 1.7325L8.35352 4.185C8.51102 4.4025 8.63102 4.6125 8.71352 4.8225C8.81102 5.0475 8.86352 5.2725 8.86352 5.49C8.86352 5.775 8.78102 6.0525 8.62352 6.315C8.51102 6.5175 8.33852 6.735 8.12102 6.9525L7.61102 7.485C7.61852 7.5075 7.62602 7.5225 7.63352 7.5375C7.72352 7.695 7.90352 7.965 8.24852 8.37C8.61602 8.79 8.96102 9.1725 9.30602 9.525C9.74852 9.96 10.116 10.305 10.461 10.59C10.8885 10.95 11.166 11.13 11.331 11.2125L11.316 11.25L11.8635 10.71C12.096 10.4775 12.321 10.305 12.5385 10.1925C12.951 9.9375 13.476 9.8925 14.001 10.11C14.196 10.1925 14.406 10.305 14.631 10.4625L17.121 12.2325C17.3985 12.42 17.601 12.66 17.721 12.945C17.8335 13.23 17.886 13.4925 17.886 13.755C17.886 14.115 17.8035 14.475 17.646 14.8125C17.4885 15.15 17.2935 15.4425 17.046 15.7125C16.6185 16.185 16.1535 16.5225 15.6135 16.74C15.096 16.95 14.5335 17.0625 13.941 17.0625ZM5.04602 2.0625C4.63352 2.0625 4.25102 2.2425 3.88352 2.6025C3.53852 2.925 3.29852 3.2775 3.14852 3.66C2.99102 4.05 2.91602 4.4625 2.91602 4.905C2.91602 5.6025 3.08102 6.36 3.41102 7.14C3.74852 7.935 4.22102 8.76 4.82102 9.585C5.42102 10.41 6.10352 11.2125 6.85352 11.97C7.60352 12.7125 8.41352 13.4025 9.24602 14.01C10.056 14.6025 10.8885 15.0825 11.7135 15.4275C12.996 15.975 14.196 16.1025 15.186 15.69C15.5685 15.5325 15.906 15.2925 16.2135 14.9475C16.386 14.76 16.521 14.5575 16.6335 14.3175C16.7235 14.13 16.7685 13.935 16.7685 13.74C16.7685 13.62 16.746 13.5 16.686 13.365C16.6635 13.32 16.6185 13.2375 16.476 13.14L13.986 11.37C13.836 11.265 13.701 11.19 13.5735 11.1375C13.4085 11.07 13.341 11.0025 13.086 11.16C12.936 11.235 12.801 11.3475 12.651 11.4975L12.081 12.06C11.7885 12.345 11.3385 12.4125 10.9935 12.285L10.791 12.195C10.4835 12.03 10.1235 11.775 9.72602 11.4375C9.36602 11.13 8.97602 10.77 8.50352 10.305C8.13602 9.93 7.76852 9.5325 7.38602 9.09C7.03352 8.6775 6.77852 8.325 6.62102 8.0325L6.53102 7.8075C6.48602 7.635 6.47102 7.5375 6.47102 7.4325C6.47102 7.1625 6.56852 6.9225 6.75602 6.735L7.31852 6.15C7.46852 6 7.58102 5.8575 7.65602 5.73C7.71602 5.6325 7.73852 5.55 7.73852 5.475C7.73852 5.415 7.71602 5.325 7.67852 5.235C7.62602 5.115 7.54352 4.98 7.43852 4.8375L5.69852 2.3775C5.62352 2.2725 5.53352 2.1975 5.42102 2.145C5.30102 2.0925 5.17352 2.0625 5.04602 2.0625ZM11.316 11.2575L11.196 11.7675L11.3985 11.2425C11.361 11.235 11.331 11.2425 11.316 11.2575Z" />
    </svg>
    <span>Email</span>
  </a>
    </div>
</div>
      <div className="book-book">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            required
            placeholder={textinputPlaceholder}
            autoComplete="name"
            className="input book-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            required
            placeholder={textinputPlaceholder1}
            autoComplete="email"
            className="input book-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            required
            placeholder={textinputPlaceholder2}
            autoComplete="tel"
            className="input book-input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="date"
            placeholder={textinputPlaceholder4}
            className="input book-input"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="text"
            placeholder={textinputPlaceholder3}
            className="input book-input"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
          <div className="selections">
            <div className="select-container1">
              <label htmlFor="building_type">{buildingType}</label>
              <select
                id="building_type"
                required
                className="custom-select1"
                value={BuildingType}
                onChange={(e) => setBuildingType(e.target.value)}
              >
                <option value="NA">Select</option>
                <option value="Commercial">Commercial</option>
                <option value="Industrial">Industrial</option>
                <option value="Medical">Medical</option>
                <option value="School">School</option>
                <option value="Office">Office</option>
                <option value="Retail">Retail</option>
                <option value="Residential">Residential</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="select-container2">
              <label htmlFor="repair">{Application}</label>
              <select
                id="repair"
                required
                className="custom-select2"
                value={application}
                onChange={(e) => setApplication(e.target.value)}
              >
                <option value="NA">Select</option>
                <option value="New Construction">New Construction</option>
                <option value="Repair">Repair</option>
                <option value="Retrofit (Current is Metal)">
                  Retrofit (Current is Metal)
                </option>
                <option value="Retrofit (Current is Rubber or Tar)">
                  Retrofit (Current is Rubber or Tar)
                </option>
                <option value="Insulation (Energy Efficient)">
                  Insulation (Energy Efficient)
                </option>
                <option value="PVC Duro-Last">PVC Duro-Last</option>
                <option value="EDPM Rubber Roofing">EDPM Rubber Roofing</option>
                <option value="Other">Other</option>
                <option value="I'm Not Sure">Not Sure</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

Contact.defaultProps = {
  heading: 'Book an Appointment',
  textinputPlaceholder: 'Name',
  textinputPlaceholder1: 'Email',
  textinputPlaceholder2: 'Phone',
  textinputPlaceholder3: 'Notes',
  textinputPlaceholder4: 'Date',
  BuildingType: 'Building Type',
  Application: 'Application',
};

Contact.propTypes = {
  heading: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  textinputPlaceholder1: PropTypes.string,
  textinputPlaceholder2: PropTypes.string,
  textinputPlaceholder3: PropTypes.string,
  textinputPlaceholder4: PropTypes.string,
  BuildingType: PropTypes.string,
  Application: PropTypes.string,
};

export default Contact;
