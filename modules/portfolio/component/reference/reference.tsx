import Button from '@ui/Button';
import React, { useState, useRef, useEffect } from 'react';
import Modal from '@ui/Modal';
import DynamicInput from '../about/dynamic-input';

interface formData {
  fullname: string;
  company: string;
  position: string;
  email: string;
  phone: number;
}
interface Errors {
  fullname?: string;
  company?: string;
  position?: string;
  email?: string;
  phone?: number;
}

function PortfolioReference() {
  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const initialFormData: formData = {
    email: '',
    fullname: '',
    company: '',
    position: '',
    phone: 0,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [text, setText] = useState<string>('');
  const [isEditing, setIsEditing] = useState(false);
  const [hide, setHide] = useState('block');
  const [errors, setErrors] = useState<Errors>({});
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  };

  //   const validateAllFieldsNotEmpty = () => {
  //     let hasEmptyField = false;
  //     Object.keys(formData).forEach((inputName) => {
  //       if (!formData[inputName as keyof FormData].trim()) {
  //         setErrors((prevErrors) => ({ ...prevErrors, [inputName]: `${inputName} is required` }));
  //         hasEmptyField = true;
  //       }
  //     });
  //     return !hasEmptyField;
  //   };

  return (
    <Modal isOpen={true} closeModal={() => {}} size="lg">
      <div className="mx-auto bg-white-100 rounded-md">
        <div className="flex justify-between border-b-8 border-brand-green-primary pb-1">
          <div className="flex gap-4 items-center">
            <div className="cursor-pointer hover:bg-brand-green-shade95 p-3 rounded-full">
              <svg width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.99984 16.9201L1.47984 10.4001C0.709844 9.63008 0.709844 8.37008 1.47984 7.60008L7.99984 1.08008"
                  stroke="#464646"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <span className="font-semibold text-lg">References</span>
          </div>
          <div
            className="flex item-center justify-center rounded-lg w-6 h-6 bg-brand-green-primary text-white-100 font-semibold cursor-pointer"
            onClick={() => {
              setHide('hidden');
            }}
          >
            x
          </div>
        </div>
        <form className="p-4 mt-10 border flex flex-col gap-4 rounded-lg border-brand-disabled">
          <DynamicInput
            onChange={handleInputChange}
            type="text"
            placeholder="Let’s meet your referee"
            InputId="ptfl-fullname"
            name="fullname"
            label="Name*"
            labelFor="fullname"
            value={formData.fullname}
            required={true}
          />
          <div className="w-full flex flex-col md:flex-row gap-4 justify-between">
            <div className="w-full md:w-[47%]">
              <DynamicInput
                onChange={handleInputChange}
                type="text"
                placeholder="Google"
                InputId="ptfl-company"
                name="company"
                label="Company*"
                labelFor="company"
                value={formData.company}
                required={true}
              />
            </div>
            <div className="w-full md:w-[47%]">
              <DynamicInput
                onChange={handleInputChange}
                type="text"
                placeholder="Type link"
                InputId="ptfl-position"
                name="position"
                label="Position"
                labelFor="position"
                value={formData.position}
                required={false}
              />
            </div>
          </div>
          <DynamicInput
            onChange={handleInputChange}
            type="email"
            placeholder="example@gmail.com"
            InputId="ptfl-email"
            name="email"
            label="Email*"
            labelFor="email"
            value={formData.fullname}
            required={true}
          />
          <DynamicInput
            onChange={handleInputChange}
            type="number"
            placeholder=""
            InputId="ptfl-phone"
            name="phone"
            label="Phone Number"
            labelFor="phone"
            value={formData.fullname}
            required={false}
            leftIcon={<span>+234</span>}
            pattern={'[0-9]{3}-[0-9]{2}-[0-9]{3}'}
          />
          <div className="flex gap-2 justify-end mt-5">
            <Button intent={'secondary'} size={'sm'} className="w-24" type="button">
              Close
            </Button>
            <Button intent={'primary'} size={'sm'} className="w-24" type="button" onClick={() => {}}>
              Save
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default PortfolioReference;
