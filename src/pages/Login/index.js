import { Button, Checkbox, FormGroup, H2, InputGroup } from "@blueprintjs/core";
import { Box, useClient } from "components";
import { Formik } from "formik";
import { useCallback, useEffect } from "react";

const Login = () => {
  const client = useClient();

  useEffect(() => {
    console.log(client);
  }, [client]);

  const onSubmit = useCallback(async (values, { setIsSubmitting, setErrors }) => {
    if (!client.__connected) return;
    try {
      const res = await client.authenticate({
        username: values["username"],
        password: values["password"],
      })
      console.log(res);
    } catch (err) {
      setErrors({
        submit: err.message
      });
      console.error(err);
    }
    setIsSubmitting(false);
    console.log(values);
  }, [client]);

  return (
    <Box sx={{
      width: 275,
      mx: "auto",
      mt: 4,
    }}>
      <Box sx={{
        borderRadius: 4,
        border: "1px solid white",
        borderColor: "gray.3",
        py: 4,
        bg: "white"
      }}>
        <Box sx={{ px: 3, mb: 3 }}>
          <H2>
            Login
          </H2>
        </Box>
        <Box sx={{ px: 3 }}>
          <Formik
            initialValues={{
              "username": "",
              "password": "",
              "keepSignin": true
            }}
            onSubmit={onSubmit}
          >
            {({ values, errors, setFieldValue, handleChange, handleSubmit, isSubmitting }) => (
              <form onSubmit={handleSubmit}>
                <FormGroup
                  label="Username or Email"
                  labelFor="f-username"
                >
                  <InputGroup
                    id="f-username"
                    name="username"
                    type="text"
                    onChange={handleChange}
                    value={values["username"]}
                  />
                </FormGroup>
                <FormGroup
                  label="Password"
                  labelFor="f-password"
                >
                  <InputGroup
                    id="f-password"
                    name="password"
                    type="password"
                    onChange={handleChange}
                    value={values["password"]}
                  />
                </FormGroup>
                <Checkbox
                  label="Tetap Masuk"
                  name="keepSignin"
                  checked={values["keepSignin"]}
                  onChange={handleChange}
                />
                <Button
                  fill={true}
                  loading={isSubmitting}
                  intent="primary"
                  text="Masuk"
                  type="submit"
                />
              </form>
            )}
          </Formik>
        </Box>
      </Box>
    </Box>
  )
}

export default Login;