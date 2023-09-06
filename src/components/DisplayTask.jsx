import {
    Box,
    Text,
    Heading,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Icon,
  } from "@chakra-ui/react";
  import { RiDeleteBin5Line } from "react-icons/ri";

const DisplayTask = (props) => {
    const {arr} = props

    const deleteHandler = (index) => {
        const newTaskList = arr.filter((todo, i) => i !== index);
        setTaskArray(newTaskList);
      };
    
      const renderTask = arr.map((value, index) => {
        const { title, body, date } = value.todo;
        console.log(title);
    
        return (
          <Card
            w={{ base: "100%", md: "280px" }}
            boxShadow={"0 0 5px rgba(0, 0, 0, 0.4)"}
            h={"15rem"}
            mb={"0.5rem"}
            key={index}
          >
            <CardHeader>
              <Heading color={"red"} size="sm" textAlign={"center"}>
                {title}
              </Heading>
            </CardHeader>
            <CardBody>
              <Text>{body}</Text>
            </CardBody>
            <CardFooter display={"flex"} justifyContent={"space-between"}>
              <Text>{date}</Text>
              <div>
                <Icon
                  as={RiDeleteBin5Line}
                  boxSize={"25"}
                  color={"red.500"}
                  cursor={"pointer"}
                  onClick={() => deleteHandler(index)}
                />
              </div>
            </CardFooter>
          </Card>
        );
      });


  return (
    <Box
        w={"100%"}
        minH={"70vh"}
        display={"grid"}
        gridTemplateColumns={"repeat(auto-fit, minmax(300px, 1fr))"}
        justifyItems={"center"}
        p={"1rem"}
        bg={"telegram.300"}
      >
        {renderTask}
      </Box>
  )
}

export default DisplayTask