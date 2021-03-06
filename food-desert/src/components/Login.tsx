import React, { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  Input,
  Button,
  Image,
  Link,
  Text,
  Alert,
  AlertDescription,
  CloseButton,
  AlertTitle,
  AlertIcon,
} from "@chakra-ui/react";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [isFetching, setIsFetching] = useState(false);
  const [hasError, setErrorState] = useState(false);

  const data = {
    email: values.email,
    password: values.password,
  };
  //   const loginUser =  (e: any) => {
  //     e.preventDefault();
  //     setIsFetching(true);

  const loginUser = (e: any) => {
    e.preventDefault();
    setIsFetching(true);
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center" my="40px">
        <Image
          height="50px"
          mt="2"
          src="/hrfsmall.jpeg"
          alt="brand logo"
        ></Image>
        {/* <Text fontWeight="bold" fontSize="28px" m="4px">
              Human Rights First
            </Text> */}
      </Box>

      <Flex
        alignItems="center"
        flexDirection={["column", "column", "row", "row"]}
        justifyContent="center"
      >
        <Image
          position="absolute"
          bottom="5%"
          left="5%"
          src="/login/left.svg"
          alt=" new user illustration"
          width={[0, "30%"]}
        />
        <Image
          position="absolute"
          bottom="5%"
          right="5%"
          src="/login/right.svg"
          alt="task scheduler illustration"
          width={[0, "30%"]}
          borderRadius="3px"
        />
        <Box
          p="25px 40px"
          width={["80%", "60%", "45%", "25%"]}
          borderRadius="3px"
          bg="white"
          boxShadow="rgb(0 0 0 / 10%) 0 0 10px"
        >
          <Image
            //   position="absolute"

            //   bottom="5%"
            //   left="5%"
            src="/hrf-logo.png"
            alt=" team work illustration"
            width={[0, "25%"]}
          />
          <Box
            textAlign="center"
            color="#5E6C84"
            mt="5"
            mb="25"
            fontSize={["16px", "16px", "20px", "20px"]}
            fontWeight="semibold"
            lineHeight="normal"
          >
            <h1>Log in</h1>
          </Box>
          <Box my={4} textAlign="center">
            <form>
              <FormControl>
                <Input
                  type="email"
                  name="email"
                  value={values.email}
                  placeholder="Enter Email "
                  onChange={handleChange}
                  autoComplete="off"
                />
              </FormControl>
              <FormControl mt={6}>
                <Input
                  type="password"
                  name="password"
                  value={values.password}
                  placeholder="Enter Password"
                  autoComplete="off"
                  onChange={handleChange}
                />
              </FormControl>
              <Button
                width="full"
                mt={4}
                bg="success"
                color="white"
                onClick={loginUser}
                isLoading={isFetching}
                loadingText="Logging"
              >
                Sign In
              </Button>
              <Box m="5" textAlign="center">
                <Link href="/signup" color="brand" p="2">
                  Sign up for an account
                </Link>
              </Box>
              {/* {showLoginError()} */}
            </form>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Login;
