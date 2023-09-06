import {
  Box,
  Button,
  VStack,
  Text,
  Heading,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Icon,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  Input,
  FormLabel,
} from "@chakra-ui/react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import { useState } from "react";

const TodoList = () => {
  const initialState = {
    title: "",
    body: "",
    date: "",
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [todo, setTodo] = useState(initialState);

  const [taskArray, setTaskArray] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    todo.title && todo.body && todo.date
      ? setTaskArray((prev) => [
          ...prev,
          { id: new Date().getMilliseconds(), todo: todo },
        ])
      : alert("Enter a valid task");
  };
  const deleteHandler = (index) => {
    const newTaskList = taskArray.filter((todo, i) => i !== index);
    setTaskArray(newTaskList);
  };

  const renderTask = taskArray.map((value, index) => {
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
    <>
      <VStack w={"100%"} h={"30vh"} justifyContent={"center"} bg={"#F5F5F5F5"}>
        <Heading> Todo List</Heading>
        <Button onClick={onOpen} bg={"green.400"}>
          create Task
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Task</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl isRequired>
                <FormLabel>Task Title</FormLabel>
                <Input
                  value={todo.title}
                  name="title"
                  onChange={(e) => setTodo({ ...todo, title: e.target.value })}
                  placeholder="Task Title"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>A note</FormLabel>
                <Input
                  value={todo.body}
                  name="body"
                  onChange={(e) => setTodo({ ...todo, body: e.target.value })}
                  placeholder="A note"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Due Date</FormLabel>
                <Input
                  value={todo.date}
                  name="date"
                  onChange={(e) => setTodo({ ...todo, date: e.target.value })}
                  type="date"
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme={"whatsapp"} mr={3} onClick={submitHandler}>
                Create
              </Button>
              <Button colorScheme="red" onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </VStack>

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
    </>
  );
};

export default TodoList;
