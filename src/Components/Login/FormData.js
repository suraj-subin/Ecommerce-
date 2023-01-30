import React, { useEffect } from "react";
import { TextField, Button, CircularProgress } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { BaseUrl } from "./Login";
import { useNavigate } from "react-router-dom";

const Formdata = ({
  errors,
  setFieldValue,
  touched,
  isSubmitting,
  values,
  showPassword,
  handleClick,
}) => {
  const Arr = localStorage.getItem("user_login");
  const navigate = useNavigate();
  useEffect(() => {
    if (JSON.parse(Arr)?.remember) {
      console.log("This is true >>", JSON.parse(Arr));
      setFieldValue("password", JSON.parse(Arr)?.password);
      setFieldValue("email", JSON.parse(Arr)?.email);
    }
  }, []);

  return (
    <>
      <Form noValidate>
        <div style={{ marginTop: "7px" }}>
          <Field
            as={TextField}
            name="userName"
            label="Email"
            variant="standard"
            fullWidth
            value={values.userName}
            error={errors.email && touched.email}
            helperText={<ErrorMessage name="email" />}
            required
          />
        </div>
        <div className="PasswordDiv" style={{ marginTop: "7px" }}>
          <Field
            as={TextField}
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            variant="standard"
            fullWidth
            value={values.password}
            error={errors.password && touched.password}
            helperText={<ErrorMessage name="password" />}
            required
          />
          <div onClick={handleClick} className="PasswordBtn">
            {showPassword ? (
              <i className="fa fa-eye" aria-hidden="true"></i>
            ) : (
              <i className="fa fa-eye-slash" aria-hidden="true"></i>
            )}
          </div>
        </div>
        <div style={{ margin: "1px 0px" }}>
          <Field
            as={FormControlLabel}
            name="remember"
            control={<Checkbox color="primary" />}
            label="Remember me"
            value={values.remember}
          />
        </div>
        <Button
          type="submit"
          color="primary"
          startIcon={isSubmitting ? <CircularProgress size="1rem" /> : null}
          disabled={isSubmitting}
          fullWidth
          size="medium"
          onClick={async () =>  {  const resp = await axios.post(BaseUrl, {
            userName: "shrestha.asmin17@gmail.com",
            password: "Sl@p4msth",
            remember: false,
          } );
            console.log('resp',resp)
            resp && navigate("/home")}}
          variant="contained"
        >
          Login
        </Button>
      </Form>
    </>
  );
};

export default Formdata;
