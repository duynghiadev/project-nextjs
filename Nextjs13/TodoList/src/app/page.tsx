"use client";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import styles from "./page.module.css";
import {
  Button,
  Row,
  Col,
  Flex,
  Space,
  TableColumnsType,
  TableProps,
  Table,
  Tag,
  Popconfirm,
} from "antd";
import Input from "antd/es/input/Input";
import { DataType } from "./interfaces/datatype";

type TableRowSelection<T> = TableProps<T>["rowSelection"];

const firstTodo: Array<DataType> = [
  {
    key: 1,
    name: "John Brown sr.",
    description: "John Brown sr.",
    status: "DONE",
  },
  {
    key: 2,
    name: "Joe Black",
    description: "John Brown sr.",
    status: "PENDING",
  },
  {
    key: 3,
    name: "Joe Black",
    description: "John Brown sr.",
    status: "PENDING",
  },
];

export default function Home() {
  const [todoList, setTodoList] = useState<DataType[]>(firstTodo);
  const [selected, setSelected] = useState<React.Key[]>([]);
  const [input, setInput] = useState<DataType>({
    key: "",
    name: "",
    description: "",
    status: "PENDING",
  });
  const rowSelection: TableRowSelection<DataType> = {
    onChange: (selectedRowKeys) => {
      setSelected(selectedRowKeys);
    },
  };

  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      responsive: ["md", "lg", "xl", "xxl"],
    },
    {
      title: "Status",
      key: "status",
      render: (object, { status }) => (
        <>
          <Tag
            style={{ cursor: "pointer" }}
            onClick={() => handleChangeStatus([object?.key], object?.status)}
            color={status == "DONE" ? "success" : "error"}
            key={status}
          >
            {status.toUpperCase()}
          </Tag>
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      fixed: "right",
      render: (object) => (
        <Space size="middle">
          <Button
            size={"middle"}
            type="primary"
            onClick={() => handleEditTodo()}
          >
            Edit
          </Button>
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete([object.key])}
          >
            <Button size={"middle"} type="dashed" danger>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const handleAddTodo = () => {
    if (input?.name?.trim() !== "") {
      setTodoList([
        {
          key: uuid(),
          name: input?.name,
          description: input?.description,
          status: "PENDING",
        },
        ...todoList,
      ]);
      setInput({ key: "", name: "", description: "", status: "PENDING" });
    }
  };

  const handleEditTodo = () => {
    alert("Coming Soon!");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleDelete = (keys: Array<React.Key>) => {
    keys.length &&
      setTodoList(todoList.filter((todo) => !keys.includes(todo.key)));
    setSelected([]);
  };

  const handleDone = (keys: Array<React.Key>) => {
    keys.length &&
      setTodoList((prevTodoList) =>
        prevTodoList.map((todo) =>
          keys.includes(todo.key) ? { ...todo, status: "DONE" } : todo
        )
      );
    setSelected([]);
  };

  const handleChangeStatus = (
    keys: Array<React.Key>,
    status?: DataType["status"]
  ) => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((todo) =>
        keys.includes(todo.key)
          ? { ...todo, status: status == "PENDING" ? "DONE" : "PENDING" }
          : todo
      )
    );
  };

  return (
    <main className={styles.container}>
      <div className={styles.main}>
        <Space direction={"vertical"}>
          <h1 className={styles.header}>Todo Application</h1>
          <Row justify={"center"} align={"middle"} className={styles.border}>
            <Col xs={24} xl={8}>
              <Input
                className={styles.input}
                value={input.name}
                name="name"
                onChange={handleChange}
                style={{ width: "90%" }}
                placeholder="Todo title"
              />
            </Col>
            <Col xs={24} xl={8}>
              <Input
                className={styles.input}
                name="description"
                onChange={handleChange}
                value={input.description}
                style={{ width: "90%" }}
                placeholder="Todo description"
              />
            </Col>
            <Col xs={24} xl={4} className={styles.mobileCenter}>
              <Button
                onClick={handleAddTodo}
                size={"large"}
                className={styles.createBtn}
              >
                Create
              </Button>
            </Col>
          </Row>
          <Flex gap="small" justify={"end"} wrap>
            <Button
              size={"large"}
              type="primary"
              danger
              className={styles.createBtn}
              onClick={() => handleDelete(selected)}
            >
              Delete Todo
            </Button>
            <Button
              size={"large"}
              className={styles.doneBtn}
              onClick={() => handleDone(selected)}
            >
              Mark as Done
            </Button>
          </Flex>
          <Table
            className={styles.table}
            tableLayout="auto"
            scroll={{ x: true }}
            columns={columns}
            rowSelection={{ ...rowSelection }}
            dataSource={todoList}
          />
        </Space>
      </div>
    </main>
  );
}
