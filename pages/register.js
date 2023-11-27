import MyPicker from "@/components/Common/DatePicker";
import RegisterHeader from "@/components/RegisterComponent/RegisterHeader";
import RegisterStepText from "@/components/RegisterComponent/RegisterStepText";
import { useState } from "react";
import { FaArrowRightLong, FaRegImage } from "react-icons/fa6";
import { AiFillCamera } from "react-icons/ai";
import { useRouter } from "next/router";
import CustomDatePicker from "@/components/Common/DatePicker";
import { fetcher } from "@/lib/api";
import { changeProfileImage } from "@/lib/profile";
import { setToken } from "@/lib/auth";

function RegisterPage() {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({
    name: "",
    dateOfBirth: "",
    profilePictureUrl: "",
    emailAddress: "",
    password: "",
  });
  const [selectedDate, setSelectedDate] = useState(null);
  const [validationMessage, setValidationMessage] = useState('')

  const [validationErr, setValidationErr] = useState({ type: '', err: '' })
  const [err, setErr] = useState(false)

  const [loading, setLoading] = useState(false)

  console.log("Form Values: ", formValues);
  console.log("selectedDate: ", selectedDate);

  const router = useRouter();

  const containsNumber = (inputString) => {
    return /\d/.test(inputString);
  };

  function containsSymbol(str) {
    var regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    return regex.test(str);
  }



  const isValidFileType = (file) => {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    const fileType = file.type.toLowerCase();
    return allowedTypes.includes(fileType);
  };
  const isValidFileSize = (file) => {
    if (file && file.size) {
      const maxSizeBytes = 2 * 1024 * 1024;
      return file.size <= maxSizeBytes;
    }
    return false; // or handle the case when file or file.size is null
  };

  async function handleImageChange(e) {

    const file = e.target.files?.[0]

    console.log('this is the file', file);

    if (file) {
      if (!isValidFileType(file)) {
        setValidationMessage(
          'Invalid file type. Only JPG and PNG files are allowed.'
        );
      } else if (!isValidFileSize(file)) {
        setValidationMessage('File size exceeds the maximum limit of 2MB.');
      } else {
        setValidationMessage('');

        setFormValues({ ...formValues, profilePictureUrl: file })
      }
    }
  }

  console.log("Validation Message: ", validationMessage);
  console.log("Err Messages: ", validationErr);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);

    if (
      (step === 1 && formValues.name.trim() === "")
    ) {
      setValidationErr({ type: 'Name', err: 'Enter your name.' })
    } else if (
      (step === 2 && selectedDate === null)
    ) {
      setValidationErr({ type: 'dob', err: 'Select your date of birth.' })
    } else if (
      (step === 3 && formValues.profilePictureUrl === "")
    ) {
      setValidationErr({ type: 'img', err: 'Select your image' })
    } else if (
      (step === 4 && formValues.emailAddress.trim() === "")
    ) {
      setValidationErr({ type: 'email', err: 'Enter your email.' })
    } else {
      setLoading(true)
      const responseData = await fetcher(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: formValues.name,
            email: formValues.emailAddress,
            // profile_image: formValues.profilePictureUrl,
            dob: selectedDate,
            password: formValues.password
          }),
        }
      );

      if (responseData?.error) {
        console.log("Error at Register", responseData.error);
        setLoading(false)

        setErr(responseData?.error?.message)
      }

      if (responseData?.user?.id) {
        setToken(responseData)
        const res = await changeProfileImage(formValues.profilePictureUrl, responseData?.user?.id, responseData?.jwt);
        router.push('/credits')

      }
      setLoading(false)

      console.log("response data: ", responseData);
    }
  }

  console.log("Err:", err);

  return (
    <div className="relative login_container">
      <RegisterHeader step={step} setStep={setStep} />
      {step === 1 && (
        <>
          <RegisterStepText text="What is your name?" />
          <input
            type="text"
            className="w-full h-[27px] bg-transparent text-center text-[#FFFFFF80] placeholder:text-[#FFFFFF80] text-[20px] outline-none"
            placeholder="e.g Janis Scheuermann"
            value={formValues.name}
            onChange={(e) =>
              setFormValues({ ...formValues, name: e.target.value })
            }
          />

          <p className="text-[#f54242] text-center mt-[10px]"> {validationErr.type == 'name' && validationErr.err}</p>


        </>
      )}
      {step === 2 && (
        <>
          <RegisterStepText text="Cool! When is your birthday?" />
          <CustomDatePicker
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          // maxDate={maxDate}
          />

          <p className="text-[#f54242] text-center mt-[10px]"> {validationErr.type == 'dob' && validationErr.err}</p>

        </>
      )}
      {step === 3 && (
        <>
          <RegisterStepText text={`Upload a`} subText="profile picture" />
          <label className="w-[102px] h-[102px] border border-white flex flex-col justify-center items-center gap-[12px] mb-[30px] mx-auto rounded-full">
            <span>
              <FaRegImage color="white" />
            </span>
            <label htmlFor="file" className="text-[14px] font-normal leading-[20.16px] text-center text-white">
              Select file
            </label>
            <input
              type="file"
              className="hidden"
              id='file'
              name='files'
              accept="image/*"
              onChange={(e) => handleImageChange(e)}
            />


          </label>
          <p className="text-white text-center mb-[39px]">Or</p>
          <label className="text-white flex justify-center items-center gap-[16px] w-full h-[72px] bg-[#9FDBED] rounded-t-[24px] rounded-b-[20px] text-[16px] font-[500] leading-[24px]">
            <AiFillCamera size={24} />
            Open camera & take photo
            <input
              id='file'
              type="file"
              name='files'
              accept="image/*"
              capture="camera"
              className="hidden"
              onChange={(e) => handleImageChange(e)}

            />
          </label>
          <p className="text-[#f54242] text-center mt-[10px]"> {validationErr.type == 'img' && validationErr.err}</p>


        </>
      )}
      {step === 4 && (
        <>
          <RegisterStepText text="What is your email?" />
          <input
            type="email"
            className="w-full h-[27px] bg-transparent text-center text-[#FFFFFF80] placeholder:text-[#FFFFFF80] text-[20px] outline-none"
            placeholder="e.g janisscheuermann@gmail.com"
            value={formValues.emailAddress}
            onChange={(e) =>
              setFormValues({ ...formValues, emailAddress: e.target.value })
            }
          />
          <p className="text-[#f54242] text-center mt-[10px]"> {validationErr.type == 'email' && validationErr.err}</p>
        </>
      )}
      {step === 5 && (
        <>
          <RegisterStepText text="Setup a password" />{" "}
          <input
            type="password"
            className="w-full h-[27px] bg-transparent text-center text-[#FFFFFF80] placeholder:text-[#FFFFFF80] text-[20px] outline-none mb-[43px]"
            placeholder="********"
            value={formValues?.password}
            onChange={(e) =>
              setFormValues({ ...formValues, password: e.target.value })
            }
          />
          <div className="mx-auto text-center flex flex-col gap-[10px] text-white text-[16px] font-[500] leading-24px]">
            <div>
              <span>{formValues?.password?.length > 7 ? "✅" : "❌"}</span> at
              least 8 characters
            </div>
            <div>
              <span>{containsNumber(formValues?.password) ? "✅" : "❌"}</span>{" "}
              at least one number
            </div>
            <div>
              <span>{containsSymbol(formValues?.password) ? "✅" : "❌"}</span>{" "}
              at least one symbol
            </div>
          </div>
          {
            err && <p style={{ color: 'red' }} className="text-center text-[20px] mt-[20px]">{err}</p>
          }
        </>
      )}



      <button
        className="fixed bottom-[56px] mx-auto left-0 right-0 w-[248px] h-[60px] text-center button-bg flex justify-center items-center rounded-[40px]"
        disabled={
          loading ||
          (step === 5 && (formValues.password.length > 7 ? false : true) && (containsNumber(formValues?.password) ? true : false) && (containsSymbol(formValues?.password) ? true : false))
        }

        onClick={(e) => {
          if (step === 5) {
            handleSubmit(e)
          } else if (step < 5) {

            if (
              (step === 1 && formValues.name.trim() === "")
            ) {
              setValidationErr({ type: 'name', err: 'Enter your name.' })
            } else if (
              (step === 2 && selectedDate === null)
            ) {
              setValidationErr({ type: 'dob', err: 'Select your date of birth.' })
            } else if (
              (step === 3 && formValues.profilePictureUrl === "")
            ) {
              setValidationErr({ type: 'img', err: 'Select your image' })
            } else if (
              (step === 4 && formValues.emailAddress.trim() === "")
            ) {
              setValidationErr({ type: 'email', err: 'Enter your email.' })
            } else {
              setStep((prev) => prev + 1);
            }
          }
        }}
      >
        {
          loading ?
            <div className="loader" /> :
            <button className="bg-white w-[240px] h-[52px] rounded-[40px] flex items-center justify-center gap-[6px] text-[16px] font-medium leading-[19.36px]">
              Next <FaArrowRightLong size={13} />
            </button>
        }

      </button>
    </div>
  );
}

export default RegisterPage;
