import React, { useContext, useRef, useState } from "react";
import LoingLayout from "../layouts/LoingLayout";
import Input from "../components/comment/Input";
import Button from "../components/comment/Button";
import CenterElement from "../components/comment/CenterElement";
import Swal from "sweetalert2";
import ErrorMessage from "../components/comment/ErrorMessage";
import { CheckEmail, CheckPassword, LoginAction } from "../api/Account";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import BottonLoading from "../components/comment/BottonLoading";

function Login() {
  const { login, fetchData } = useContext(AuthContext);
  const navigate = useNavigate();
  const refError = useRef(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    emailOrPhone: "",
    password: "",
  });

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
    e.preventDefault();
    const newErrors = {};

    const emailMessage = CheckEmail(formData.emailOrPhone);
    const passwordMessage = CheckPassword(formData.password);

    if (emailMessage !== "") newErrors.emailOrPhone = emailMessage;
    if (passwordMessage !== "") newErrors.password = passwordMessage;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);

      return;
    }
    setLoading(true);
    try {
      const response = await LoginAction({
        email: formData.emailOrPhone,
        password: formData.password,
      });

      login(response.data.token.result);
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        timer: 1200,
        showConfirmButton: false,
      });
      await fetchData();
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
      if (refError.current) {
        refError.current.innerHTML = "Invalid Email or Password";
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoingLayout
      title="Log in to Exclusive"
      subtitle="Enter your details below"
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <p ref={refError} className="text-red-500 text-sm text-center"></p>
        <div>
          <Input
            type="text"
            name="emailOrPhone"
            value={formData.emailOrPhone}
            onChange={handleChange}
            placeholder="Email or Phone Number"
            inputstyle="borderBottom"
            className="placeholder-gray-400 py-2 md:text-base text-sm"
            required
          />
          {errors.emailOrPhone && <ErrorMessage text={errors.emailOrPhone} />}
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
          />
          {errors.password && <ErrorMessage text={errors.password} />}
        </div>

        <div className="flex justify-between items-center pt-4">
          <Button disabled={loading} size="lg" className="md:text-sm text-xs">
            {loading ? <BottonLoading  /> : "Log In"}
          </Button>
          <a
            href="#"
            className="text-red-500 hover:underline md:text-sm text-xs font-medium"
          >
            Forget Password?
          </a>
        </div>
        <CenterElement>
          <p className="text-center text-sm text-gray-500 flex gap-3">
            <span>Don't have an account? </span>
            <a
              href="/Signup"
              className="text-black after:contain-content after:w-full after:h-[1.5px] after:bg-gray-400 after:left-0 after:absolute relative after:-bottom-1"
            >
              Sign up
            </a>
          </p>
        </CenterElement>
      </form>
    </LoingLayout>
  );
}

export default Login;
