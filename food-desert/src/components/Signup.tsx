import React from 'react';
import { useState } from 'react'
import {
    Flex,
    Box,
    FormControl,
    Input,
    Button,
    Image,
    Link,
    useToast,
    Alert,
    AlertDescription,
    CloseButton,
    AlertTitle,
    AlertIcon
  } from '@chakra-ui/react';

const Signup = (): JSX.Element => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        fullName: '',
        confirmPassword: ''
      });

    const [emailErr, setEmailErr] = useState(false);
    const [passwordErr, setPasswordErr] = useState(false);
    const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
    const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');

    const { email, password, confirmPassword, fullName } = values;

    const data = {
    //   id,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      fullName: fullName
    };
    const validate = () => {
        if (!validEmail.test(values.email)) {
          setEmailErr(true);
        } else {
          setEmailErr(false);
        }
    
        if (!validPassword.test(values.password)) {
          setPasswordErr(true);
        } else {
          setPasswordErr(false);
        }
      };

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value
        });
    
        validate();
      };

    const isButtonDisabled = () => {
        const isValidPassword = values.password !== values.confirmPassword;
        const isDisabled = !values.email || !values.fullName;
    
        return isValidPassword || isDisabled || !values.password || !values.confirmPassword;
      };
    
      return (
        <>
          <Box display="flex">
            <Image
              height="60px"
              ml="auto"
              mr="auto"
              my="40px"
              src="/hrfsmall.jpeg"
              display="inline-block"
              alt="brand logo"
            />
          </Box>
          <Flex
            alignItems="center"
            flexDirection={['column', 'column', 'row', 'row']}
            justifyContent="center">
            <Image
              position="absolute"
              bottom="5%"
              left="5%"
              src="/hrf-logo.png"
              alt=" team work illustration"
              width={[0, '25%']}
            />
            <Image
              position="absolute"
              bottom="5%"
              right="5%"
              src="/signup/sign-up-right.svg"
              alt="work together illustration"
              width={[0, '25%']}
              borderRadius="3px"
            />
            <Box
              p="25px 40px"
              width={['80%', '80%', '65%', '25%']}
              borderRadius="3px"
              bg="white"
              boxShadow="rgb(0 0 0 / 10%) 0 0 10px">
            <Image
            //   position="absolute"
              
            //   bottom="5%"
            //   left="5%"
              src="/hrf-logo.png"
              alt=" team work illustration"
              width={[0, '25%']}
            />      
            
              <Box
                textAlign="center"
                color="#5E6C84"
                mt="5"
                mb="25"
                fontSize={['5px', '10px', '5px', '10px']}
                // fontWeight="semibold"
                lineHeight="normal">
                <h1>Sign up for your account</h1>
              </Box>
              <Box my={4} textAlign="left">
                <FormControl isRequired>
                  <Input
                    type="email"
                    name="email"
                    value={values.email}
                    placeholder="Enter Email"
                    onChange={handleChange}
                    autoComplete="off"
                  />
                  {emailErr && <p color="red">Invalid email.</p>}
                </FormControl>
                <FormControl my="4" isRequired>
                  <Input
                    type="text"
                    name="fullName"
                    value={values.fullName}
                    placeholder="Full name"
                    onChange={handleChange}
                    autoComplete="off"
                  />
                </FormControl>
                <FormControl my="4">
                  <Input
                    type="password"
                    name="password"
                    value={values.password}
                    placeholder="Create password"
                    onChange={handleChange}
                  />
                  {passwordErr && <p color="red">Invalid password.</p>}
                </FormControl>
                <FormControl my="4">
                  <Input
                    type="password"
                    name="confirmPassword"
                    value={values.confirmPassword}
                    placeholder="Confirm password"
                    onChange={handleChange}
                  />
                </FormControl>
                <Button
                  fontWeight="semibold"
                  width="full"
                  mt={4}
                  disabled={isButtonDisabled()}
                  bg="success"
                  color="navy"
                //   onClick={registerUser}
                //   isLoading={isCreating}
                  loadingText="Registering">
                  Sign up
                </Button>
                <Box m="5" textAlign="center">
                  <Link href="/login" color="brand" p="2">
                    Already have an account? Log in.
                  </Link>
                </Box>
                {/* {showSignUpError()} */}
              </Box>
            </Box>
          </Flex>
        </>
      )
}

export default Signup;
