import React from "react";
import { useState } from "react";
import "./Questionaire.css";
import {
  Checkbox,
  Stack,
  CheckboxGroup,
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
  AlertIcon,
} from "@chakra-ui/react";

function Questionaire() {
  const [values, setValues] = useState({
    zip: "",
    phone: "",
  });

  const [checkedItems, setCheckedItems] = useState([false, false]);

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  const { zip, phone } = values;

  const data = {
    zip: zip,
    phone: phone,
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    // validate();
  };

  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Image
          width={[1, "50%"]}
          mt="2"
          src="/hrfblue.jpeg"
          alt="brand logo"
        ></Image>
      </Box>

      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        p="25px 40px"
        width={["90%", "90%", "85%", "45%"]}
        borderRadius="3px"
        bg="white"
        boxShadow="rgb(0 0 0 / 10%) 0 0 10px"
      ></Box>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="spaceBetween"
        alignItems="center"
        width="100vw"
        border="1px solid black"
      >
        
        
        <Box
        display="flex"
        flexDirection="column"
        justifyContent="spaceAround"
        // alignItems="center"
        width="100vw"
        border="1px solid black" 
        >

        
        <FormControl
          isRequired
        >
          Please enter your phone number to recieve updates
          <Input
            type="phone"
            name="phone"
            value={values.phone}
            placeholder="Enter Phone"
            onChange={handleChange}
            autoComplete="off"
          />
          {/* {emailErr && <p color="red">Invalid email.</p>} */}
        </FormControl>
        <FormControl my="4" isRequired>
          Please enter your zip code to match with nearest organization
          <Input
            type="text"
            name="zip"
            value={values.zip}
            placeholder="Zip Code"
            onChange={handleChange}
            autoComplete="off"
          />
        </FormControl>
        </Box>

        <Stack
          pl={6}
          mt={20}
          spacing={20}
          alignItems="center"
          textAlign="center"
          border="1px solid black"  
          width="80"
        >
          <p>How are you willing to Volunteer?</p>
          <Checkbox>Pick up/Drop off</Checkbox>
          <Checkbox>Food Preparation</Checkbox>
          <Checkbox>Packing (Non Cooking)</Checkbox>
          <Checkbox>Distribution Assistance</Checkbox>
        </Stack>

        <Stack
          pl={6}
          mt={1}
          spacing={20}
          alignItems="center"
          border="1px solid black"
          width="100"
          // textAlign="center"
        >
          <p>Please check which apply to you!</p>
          <Checkbox>Experience with food prep?</Checkbox>
          <Checkbox>Do you own a vehicle?</Checkbox>
        </Stack>

        <Stack spacing={5} direction="row" border="1px solid black"></Stack>
      </Box>
      <Button
        fontWeight="semibold"
        width="full"
        mt={4}
        // disabled={isButtonDisabled()}
        bg="success"
        color="navy"
        //   onClick={registerUser}
        //   isLoading={isCreating}
        loadingText="Registering"
      >
        Sign up
      </Button>
    </>
  );
}

export default Questionaire;
