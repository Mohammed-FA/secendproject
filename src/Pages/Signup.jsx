import React, { useContext, useRef, useState } from "react";
import LoingLayout from "../layouts/LoingLayout";
import Input from "../components/comment/Input";
import Button from "../components/comment/Button";
import CenterElement from "../components/comment/CenterElement";
import { CheckEmail, CheckPassword, SignupAction } from "../api/Account";
import ErrorMessage from "../components/comment/ErrorMessage";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import BottonLoading from "../components/comment/BottonLoading";
import Swal from "sweetalert2";
export default function Signup() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const refinput = useRef(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPass: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPass: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const newErrors = {};

    if (!formData.fullName || formData.fullName.trim().length < 2) {
      newErrors.fullName = "Full name must be at least 2 characters";
    }

    const Emailmessage = CheckEmail(formData.email);
    const Passwordmessage = CheckPassword(formData.password);
    if (Emailmessage !== "") newErrors.email = Emailmessage;
    if (Passwordmessage !== "") newErrors.password = Passwordmessage;

    if (formData.confirmPass !== formData.password) {
      newErrors.confirmPass = "Passwords do not match";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);

      return;
    }

    const data = new FormData();
    data.append("fullName", formData.fullName);
    data.append("email", formData.email);
    data.append("password", formData.password);
    data.append("confirmPass", formData.confirmPass);
    try {
      const responsive = await SignupAction(data);
      console.log(responsive.data.token.result);
      login(responsive.data.token.result);
      Swal.fire({
        icon: "success",
        title: "Signup Successful",
        timer: 1200,
        showConfirmButton: false,
      });
      navigate("/");
      setLoading(false);
    } catch {
      if (refinput.current) {
        refinput.current.innerHTML = "Email is already registered!";
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoingLayout title="Create an account" subtitle="Enter your details below">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <p
            className="text-red-500 text-sm mb-2 text-center"
            ref={refinput}
          ></p>

          <Input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="fullName"
            inputstyle="borderBottom"
            className="placeholder-gray-400 py-2 md:text-base text-sm"
            required
          />
          {errors.fullName && <ErrorMessage text={errors.fullName} />}
        </div>
        <div>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email or Phone Number"
            inputstyle="borderBottom"
            className="placeholder-gray-400 py-2 md:text-base text-sm"
            required
          />
          {errors.email && <ErrorMessage text={errors.email} />}
        </div>
        <div>
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="password"
            inputstyle="borderBottom"
            className="placeholder-gray-400 py-2 md:text-base text-sm"
            required
          />
          {errors.password && <ErrorMessage text={errors.password} />}
        </div>
        <div>
          <Input
            type="password"
            name="confirmPass"
            value={formData.confirmPass}
            onChange={handleChange}
            placeholder="Confirm Password"
            inputstyle="borderBottom"
            className="placeholder-gray-400 py-2 md:text-base text-sm"
            required
          />
          {errors.confirmPass && <ErrorMessage text={errors.confirmPass} />}
        </div>
        <Button disabled={loading} size="lg" className="w-full  ">
          {loading ? (
            <BottonLoading />
          ) : (
            <span className="font-normal md:text-base  text-sm">
              Create Account
            </span>
          )}
        </Button>

        {/* <Button
          size="lg"
          variant="white"
          className="w-full flex items-center gap-2 flex-wrap  "
          type="button"
        >
          <img
            src={Icon_Google}
            alt="Google"
            className="md:w-5 md:h-5 w-4 h-4"
          />
          <span className="font-normal md:text-base text-sm">
            Sign up with Google
          </span>
        </Button> */}
        <CenterElement>
          <p className="text-center text-sm text-gray-500 flex gap-3">
            <span>Already have an account? </span>
            <a
              href="/login"
              className="text-black after:contain-content after:w-full after:h-[1.5px] after:bg-gray-400 after:left-0 after:absolute relative after:-bottom-1"
            >
              Log in
            </a>
          </p>
        </CenterElement>
      </form>
    </LoingLayout>
  );
}
