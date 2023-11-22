import Image from "next/image";
import Logo from "../public/assets/logo.png";
import Keen from "../public/assets/Keen.png";
import GoogleIcon from "../public/assets/google_icon.png";
import AppleIcon from "../public/assets/apple_icon.png";
import { useState } from "react";
import Head from "next/head";
import { loginUser } from "@/utils/loginUser";
import Spinner from "@/lib/spinner";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Link from "next/link";
import { fetcher } from "@/lib/api";
import { setToken } from "@/lib/auth";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  //  Just for testing user flow cases

  const handleClick = () => {
    window.localStorage.setItem("user", "active");
    router.push("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const responseData = await fetcher(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: email,
          password: password,
        }),
      }
    );
    if (responseData?.error) {
      const message = responseData?.error?.message
        ? responseData?.error?.message.replace(
            "Invalid identifier or password",
            "Invalid credentials"
          )
        : "Something went wrong please retry.";
      toast.error(`${message}`);
      setLoading(false);

      return;
    }

    setToken(responseData);
    setLoading(false);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login_container">
      <Head>
        <title>Keen - Login</title>
      </Head>
      <div>
        <div className="flex flex-col justify-center items-center mx-auto w-full pt-[30px] pb-[51px] gap-[12px]">
          <Image src={Logo} alt="Keen Logo" className="block" />
          <Image src={Keen} alt="Keen Logo" className="block" />
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="bg-[#D9F1F9] w-full h-[60px] relative rounded-[50px] px-[29px] py-[14px] flex items-center mb-[16px]">
              <input
                className={`w-full h-full bg-transparent relative outline-none placeholder:text-[#15224F] text-[#15224F] ${
                  email ? "pt-3" : "pt-0"
                }`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
                required
                placeholder="Email/ Phone number"
              />
              <label
                className={`absolute top-3 text-[#7A7676] ${
                  email
                    ? "-translate-y-1 text-sm  visible"
                    : "transform translate-y-1.5 text-base invisible"
                }`}
                style={{ transition: "all 0.2s" }}
              >
                Email/ Phone number
              </label>
            </div>
            <div className="bg-[#D9F1F9] w-full h-[60px] relative rounded-[50px] px-[29px] py-[14px] flex items-center mb-[24px]">
              <input
                className={`w-full h-full bg-transparent relative outline-none placeholder:text-[#15224F] text-[#15224F] ${
                  password ? "pt-3" : "pt-0 z-30"
                }`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                autoComplete="new-password"
                required
                placeholder="Password"
              />
              <label
                className={`absolute top-3 z-20 text-[#7A7676]  ${
                  password
                    ? "-translate-y-1 text-sm "
                    : "transform translate-y-1.5 text-base "
                }`}
                style={{ transition: "all 0.2s" }}
              >
                Password
              </label>
            </div>
            <button
              className="w-full outline-none bg-[#9FDBED] text-white h-[60px] rounded-[50px] text-[16px] font-semibold tracking-[2%] leading-[24px]"
              disabled={loading}
              type="button"
              onClick={()=>handleClick()}
            >
              {loading ? <Spinner /> : "Login"}
            </button>
          </form>
          <p className="mx-auto text-center my-[24px] text-[12px] font-normal leading-[14.52px] tracking-[3%]">
            Or Sign in with
          </p>

          <div className="mb-[32px]">
            <div
              className="w-full outline-none bg-transparent border border-[#134140] text-[#134140] h-[60px] rounded-[50px] text-[16px] font-normal tracking-[2%] leading-[24px] mb-[16px] flex justify-center items-center gap-[7px]"
              onClick={() =>
                router.push(
                  process.env.NEXT_PUBLIC_STRAPI_URL + "/api/connect/google"
                )
              }
            >
              <Image src={GoogleIcon} alt="Google Icon" />
              Sign in with Google
            </div>
            <div className="w-full outline-none bg-black text-white h-[60px] rounded-[50px] text-[16px] font-normal tracking-[2%] leading-[24px] mb-[16px] flex justify-center items-center gap-[10px]">
              <Image src={AppleIcon} alt="Google Icon" />
              Sign in with Apple
            </div>
          </div>
          <p className="text-[#3B4C68] text-center mx-auto font-normal text-[12px]">
            Don’t have an account ?{" "}
            <Link href="/register" className="text-[#21899C] font-bold">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
