import React, { useState } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Formdata from "./FormData";

export const BaseUrl = "http://13.127.139.254:8080/khrouch/v1/api/admin/authenticate";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleClick = () => setShowPassword((show) => !show);

  const paperStyle = { padding: "25px 20px", width: 350, margin: "100px auto"};
  const passwordRegExp =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  const initialValues = {
    userName: "shrestha.asmin17@gmail.com",
    password: "Sl@4pmsth",
    remember: false,
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Enter valid email").required("Required !!"),
    password: Yup.string()
      .min(8, "Minimum characters should be 8")
      .matches(
        passwordRegExp,
        "Include upper & lower case, number, special symbol"
      )
      .required("Required !!"),
  });
  return (
    <Grid>
      <Paper elevation={1} style={paperStyle}>
        <Grid style={{ textAlign: "center" }}>
          <Typography variant="h6" style={{fontWeight:"600",marginBottom:"7px"}}>Login Here</Typography>
          <Typography variant="caption">
            Fill in the fields below to Login into your account.
          </Typography>
        </Grid>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          enableReinitialize={true}
          onSubmit={async (values, props) => {
            try {
              console.log('asdfj')
              const resp = await axios.post(BaseUrl, values);
              console.log('resp',resp)
              resp && navigate("/home",{replace:true});
              localStorage.setItem("user_login", JSON.stringify(values));
              setTimeout(() => {
                props.resetForm(); // Form is reset After Form is Submit.
              }, 1500);
            } catch (error) {}
          }}
        >
          {({ errors, setFieldValue, touched, isSubmitting, values }) => (
            <Formdata
              errors={errors}
              setFieldValue={setFieldValue}
              touched={touched}
              isSubmitting={isSubmitting}
              values={values}
              handleClick={handleClick}
              showPassword={showPassword}
            />
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default Login;
