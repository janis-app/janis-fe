import MyPicker from "@/components/Common/DatePicker";
import RegisterHeader from "@/components/RegisterComponent/RegisterHeader";
import RegisterStepText from "@/components/RegisterComponent/RegisterStepText";
import { useState } from "react";
import { FaArrowRightLong, FaRegImage } from "react-icons/fa6";
import { AiFillCamera } from "react-icons/ai";
import { useRouter } from "next/router";
import CustomDatePicker from "@/components/Common/DatePicker";
import { fetcher } from "@/lib/api";

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

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];

    setFormValues({
      ...formValues,
      profilePictureUrl: selectedImage,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);

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
          dob: selectedDate,
          password: formValues.password
        }),
      }
    );

    if (responseData.error) {
      console.log("Error at Register", responseData.error);
    }

    console.log("response data: ", responseData);
  }

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
        </>
      )}
      {step === 3 && (
        <>
          <RegisterStepText text={`Upload a`} subText="profile picture" />
          <label className="w-[102px] h-[102px] border border-white flex flex-col justify-center items-center gap-[12px] mb-[30px] mx-auto rounded-full">
            <span>
              <FaRegImage color="white" />
            </span>
            <p className="text-[14px] font-normal leading-[20.16px] text-center text-white">
              Select file
            </p>
            <input type="file" className="hidden" />
          </label>
          <p className="text-white text-center mb-[39px]">Or</p>
          <label className="text-white flex justify-center items-center gap-[16px] w-full h-[72px] bg-[#9FDBED] rounded-t-[24px] rounded-b-[20px] text-[16px] font-[500] leading-[24px]">
            <AiFillCamera size={24} />
            Open camera & take photo
            <input
              type="file"
              accept="image/*"
              capture="camera"
              className="hidden"
              onChange={handleImageChange}

            />
          </label>
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
        </>
      )}

      <button
        className="fixed bottom-[56px] mx-auto left-0 right-0 w-[248px] h-[60px] text-center button-bg flex justify-center items-center rounded-[40px]"
        disabled={
          (step === 1 && formValues.name.trim() === "") ||
          (step === 2 && selectedDate === null) ||
          // (step === 3 && formValues.profilePictureUrl === "") ||
          (step === 4 && formValues.emailAddress.trim() === "") ||
          (step === 5 && (formValues.password.length > 7 ? false : true) && (containsNumber(formValues?.password) ? true : false) && (containsSymbol(formValues?.password) ? true : false))
        }

        onClick={(e) => {
          if (step === 5) {
            handleSubmit(e)
            // router.push("/credits");
          } else if (step < 5) {

            setStep((prev) => prev + 1);
          }
        }}
      >
        <button className="bg-white w-[240px] h-[52px] rounded-[40px] flex items-center justify-center gap-[6px] text-[16px] font-medium leading-[19.36px]">
          Next <FaArrowRightLong size={13} />
        </button>

      </button>
    </div>
  );
}

export default RegisterPage;
