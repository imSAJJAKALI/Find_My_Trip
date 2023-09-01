import { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
  Text,
} from '@chakra-ui/react';
import axios from 'axios';

const url = 'https://purringroot-serverr.onrender.com/destination';
const AddPlanForm = () => {
  const [plan, setPlan] = useState<any>({
    image: '',
    name: '',
    days: '',
    price: 0,
    stars: 0,
    category: '',
    details: '',
  });

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPlan((prevState:any) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(plan.image && plan.name&& plan.days&&plan.price&& plan.stars&& plan.category&&plan.details){

        axios.post(url,plan).then((res)=>alert("Your plan post successfully....."))
    }else{
        alert("Fill All The Input Boxes.....")
    }
  };

  return (
<>
<br />
<br />
<br />
<br />
    <Box p={4} maxWidth="500px" border={'3px solid teal'} borderRadius={'15px'} margin="0 auto" >
        <Text bg={'#98EECC'} textAlign={'center'} color={'#FF6969'} fontSize={'3xl'} borderRadius={'15px'}> <b>Add New Plan</b> </Text>
     <br />
    
      <form onSubmit={handleSubmit} >
        <FormControl mb={4} >
          <FormLabel>Image URL</FormLabel>
          <Input
            name="image"
            value={plan.image}
            onChange={handleChange}
            placeholder="Enter image URL"
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Name</FormLabel>
          <Input
            name="name"
            value={plan.name}
            onChange={handleChange}
            placeholder="Enter name"
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Days</FormLabel>
          <Input
            name="days"
            value={plan.days}
            onChange={handleChange}
            placeholder="Enter days"
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Price</FormLabel>
          <Input
            name="price"
            value={plan.price}
            onChange={handleChange}
            placeholder="Enter price"
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Stars</FormLabel>
          <Input
            name="stars"
            value={plan.stars}
            onChange={handleChange}
            placeholder="Enter stars"
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Category</FormLabel>
          <Input
            name="category"
            value={plan.category}
            onChange={handleChange}
            placeholder="Enter category"
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Details</FormLabel>
          <Textarea
            name="details"
            value={plan.details}
            onChange={handleChange}
            placeholder="Enter details"
          />
        </FormControl>
        <Button type="submit" colorScheme="teal">
          Add Plan
        </Button>
      </form>
    </Box>
    </>
  );
};

export default AddPlanForm;
