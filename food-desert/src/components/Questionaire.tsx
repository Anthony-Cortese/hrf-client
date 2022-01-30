import React from "react";
import { useState } from "react";
import "./Questionaire.css";
import { Box } from "@chakra-ui/react";
import {
  Checkbox,
  Stack,
  CheckboxGroup,
  Flex,
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
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
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
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <h1>Welcome New Volunteer!</h1>
        <h2>
          Please fill out this additional information for us to get to know you
          better!
        </h2>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="spaceBetween"
        alignItems="center"
        width="100vw"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="spaceBetween"
          alignItems="center"
          textAlign="center"
          width="80vw"
        >
          <FormControl
            isRequired
            display="flex"
            flexDirection="row"
            justifyContent="spaceBetween"
            alignItems="center"
          >
            <p>Please enter your phone number to recieve updates</p>
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
          <FormControl
            my="4"
            isRequired
            display="flex"
            flexDirection="row"
            justifyContent="spaceBetween"
            alignItems="center"
          >
            <p>Please enter your zip code to match with nearest organization</p>
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
          width="80%"
          fontSize="25px"
        >
          <h3>How are you willing to Volunteer?</h3>
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
          textAlign="center"
          width="80%"
          fontSize="25px"

        >
          <h3>Please check which apply to you!</h3>
          <Checkbox>Experience with food prep?</Checkbox>
          <Checkbox>Do you own a vehicle?</Checkbox>
        </Stack>

        <Stack
          spacing={5}
          align="center"
          direction="column"
          width="80%"
          fontSize="25px"
        >
          <h3>When can you generally volunteer?</h3>
          <Stack
            spacing={20}
            align="center"
            direction="column"
            width="20%"
          >
            <Stack
            spacing={40}
            align="center"
            direction="row"
            width="80"
            border="1px solid black"
          >
            <Checkbox>Sunday</Checkbox>{" "}
            <Checkbox>AM</Checkbox>
            <Checkbox>PM</Checkbox>
            </Stack>
            <Stack
            spacing={40}
            align="center"
            direction="row"
            width="80"
            border="1px solid black"
          >
            <Checkbox>Monday</Checkbox> <Checkbox direction="row">AM</Checkbox>
            <Checkbox direction="row">PM</Checkbox> </Stack>
            
            <Stack
            spacing={40}
            align="center"
            direction="row"
            width="80"
            border="1px solid black"
          >
            <Checkbox>Tuesday</Checkbox>
            <Checkbox direction="row">AM</Checkbox>
            <Checkbox direction="row">PM</Checkbox>
            </Stack>
            <Stack
            align="center"
            direction="row"
            width="80"
            border="1px solid black"
            spacing={25}
          >
            <Checkbox>Wednesday</Checkbox>{" "}
            <Checkbox direction="row">AM</Checkbox>
            <Checkbox direction="row">PM</Checkbox>
            </Stack>
            <Stack
            align="center"
            direction="row"
            width="80"
            border="1px solid black"
            spacing={40}
          >
            <Checkbox>Thursday</Checkbox>{" "}
            <Checkbox direction="row">AM</Checkbox>
            <Checkbox direction="row">PM</Checkbox>
          </Stack>
          <Stack
            align="center"
            direction="row"
            width="80"
            border="1px solid black"
            spacing={60}
          >
            <Checkbox>Friday</Checkbox> <Checkbox direction="row">AM</Checkbox>
            <Checkbox direction="row">PM</Checkbox>
            </Stack>
            <Stack
            align="center"
            direction="row"
            width="80"
            border="1px solid black"
            spacing={40}
          >
            <Checkbox>Saturday</Checkbox>{" "}
            <Checkbox direction="row">AM</Checkbox>
            <Checkbox direction="row">PM</Checkbox>
            </Stack>
          </Stack>
        </Stack>
        <Box
          overflowY="scroll"
          overflowX="scroll"
          bgSize="100px"
          bgRepeat="repeat"
        >
          <h3>Distance you are willing to travel?</h3>
          <Slider
            aria-label="slider-ex-1"
            defaultValue={30}
            border="1px solid black"
            height="40px"
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>

          {/* <Slider aria-label='slider-ex-1' defaultValue={30}>
        <SliderTrack>
        <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
        </Slider> */}
        </Box>

        <Box
          overflowY="scroll"
          overflowX="scroll"
          bgSize="100px"
          bgRepeat="repeat"
        >
          <h3>How much time can you spend volunteering for a single task?</h3>
          <Slider
            aria-label="slider-ex-1"
            defaultValue={30}
            border="1px solid black"
            height="40px"
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>

          {/* <Slider aria-label='slider-ex-1' defaultValue={30}>
        <SliderTrack>
        <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
        </Slider> */}
        </Box>
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
