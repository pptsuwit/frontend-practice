"use client";

import DropArea from "@/components/DropArea";
import { Button, Form, FormProps, Input, message, Modal, Popconfirm } from "antd";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
interface List {
  id: string;
  title: string;
  sequence: number;
}
type FieldType = {
  id?: string;
  title: string;
};
export default function Page() {
  const [todoList, setTodoList] = useState<List[]>([]);
  const [form] = Form.useForm();

  const [sequence, setSequence] = useState(0);
  const [formInput, setFormInput] = useState(<></>);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("practice01") as string) || [];
    setTodoList(data);
  }, []);

  function handleDrag(e: React.DragEvent, data: List) {
    e.dataTransfer.setData("dataId", data.id.toString());
  }
  function handleDrop(e: React.DragEvent) {
    const dataId = e.dataTransfer.getData("dataId");
    const findData = todoList.find((x) => x.id.toString() === dataId);
    const filter = todoList.filter((x) => x.id.toString() !== dataId);
    if (findData) {
      if (sequence === 0) {
        filter.splice(0, 0, findData);
      } else if (sequence === todoList.length) {
        filter.splice(todoList.length, 0, findData);
      } else if (findData.sequence === sequence - 1 || findData.sequence === sequence) {
        filter.splice(findData.sequence, 0, findData);
      } else if (sequence > findData.sequence) {
        filter.splice(sequence - 1, 0, findData);
      } else {
        filter.splice(sequence, 0, findData);
      }
    }

    const newList = filter.map((prev, index) => {
      return { ...prev, sequence: index };
    });
    newList.sort((a, b) => a.sequence - b.sequence);
    localStorage.setItem("practice01", JSON.stringify(newList));
    setTodoList(newList);
  }
  function handleDragOver(e: React.DragEvent, sq: number) {
    e.preventDefault();
    setSequence(sq);
  }

  function createList() {
    const newForm = (
      <Form form={form} onFinish={onFinishCreate} autoComplete="off">
        <div className="text-xl m-2">Create new todo list</div>
        <Form.Item<FieldType>
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please input your title!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item className="flex justify-end">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );

    setFormInput(newForm);
    setIsModalOpen(true);
  }
  function editList(id: string, title: string) {
    const editForm = (
      <Form form={form} onFinish={onFinishEdit} autoComplete="off">
        <div className="text-xl m-2">Edit todo list</div>
        <Form.Item<FieldType>
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please input your title!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType> name="id" hidden>
          <Input />
        </Form.Item>
        <Form.Item className="flex justify-end">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );

    form.setFieldsValue({ id: id, title: title });
    setFormInput(editForm);
    setIsModalOpen(true);
  }

  const onFinishCreate: FormProps<FieldType>["onFinish"] = (values) => {
    setTodoList((prev) => {
      const newList = [...prev, { id: uuidv4(), title: values.title, sequence: prev.length }];
      localStorage.setItem("practice01", JSON.stringify(newList));
      return newList;
    });
    setIsModalOpen(false);
    form.setFieldsValue({ title: "" });
  };
  const onFinishEdit: FormProps<FieldType>["onFinish"] = (values) => {
    let editTodoList = [...todoList];
    let index = todoList.findIndex((todo) => todo.id === values.id);
    editTodoList[index].title = values.title;
    localStorage.setItem("practice01", JSON.stringify(editTodoList));
    setTodoList(editTodoList);
    setIsModalOpen(false);
    form.setFieldsValue({ title: "", id: undefined });
  };

  const confirm = (id: string) => {
    setTodoList((prev) => {
      const newList = prev.filter((todo) => todo.id !== id);
      localStorage.setItem("practice01", JSON.stringify(newList));
      return newList;
    });
    message.success("Todo list was removed successfully");
  };

  return (
    <div>
      <Modal open={isModalOpen} onCancel={() => setIsModalOpen(false)} footer={<></>}>
        {formInput}
      </Modal>
      <div className="text-center text-2xl font-bold m-6">Todo List Drag and Drop</div>

      <div className="flex justify-end mx-auto w-[340px] m-2">
        <Button type="primary" onClick={createList} className="">
          New
        </Button>
      </div>
      <div className="flex justify-center mx-auto w-[340px]">
        <div
          onDrop={handleDrop}
          className={`${todoList.length && "border"} rounded-sm w-fit grid justify-center`}
        >
          {todoList.map((item) => {
            return (
              <div key={item.id}>
                <DropArea handleDragOver={handleDragOver} sequence={item.sequence} />
                <div
                  className="border rounded-md h-16 p-2 mx-6
              flex justify-between items-center w-72"
                  onDragStart={(e) => handleDrag(e, item)}
                  onDragOver={(e) => handleDragOver(e, item.sequence)}
                  draggable
                >
                  <div>{item.title}</div>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => editList(item.id, item.title)}
                      color="primary"
                      variant="outlined"
                    >
                      edit
                    </Button>
                    <Popconfirm
                      title="Delete the task"
                      description="Are you sure to delete this task?"
                      onConfirm={() => {
                        confirm(item.id);
                      }}
                      okText="Yes"
                      cancelText="No"
                    >
                      <Button danger>Delete</Button>
                    </Popconfirm>
                  </div>
                </div>
              </div>
            );
          })}

          <DropArea handleDragOver={handleDragOver} sequence={todoList.length} />
        </div>
      </div>
    </div>
  );
}
