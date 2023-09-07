import {
  Button,
  VStack,
  Heading,
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
import { useState } from "react";
import DisplayTask from "./DisplayTask";

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
      setTodo(initialState);
  };

  return (
    <>
      <VStack
        w={"100%"}
        h={"30vh"}
        justifyContent={"center"}
        color={"red"}
        bg={"#F5F5F5F5"}
      >
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

      <DisplayTask arr={taskArray} setArr={setTaskArray} />
    </>
  );
};

export default TodoList;
