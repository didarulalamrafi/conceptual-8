import React from "react";
import { addPost, getPost } from "../../../database/postdb";
import { FloppyDisk } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { hadlePostAction } from "../action/postAction";
const ServerActionpage = () => {
  const posts = getPost();

  //   const hadlePostAction = async (formData) => {
  //     "use server";
  //     const title = formData.get("title");
  //     const description = formData.get("description");
  //     addPost({ title, description });
  //   };

  return (
    <div>
      Server Action
      <Form
        action={hadlePostAction}
        className="w-full max-w-96 mx-auto p-5 my-10 border-2 rounded-2xl shadow-olive-50"
      >
        <Fieldset>
          <Fieldset.Legend>Add Post</Fieldset.Legend>
          <Description>Update your profile information.</Description>
          <FieldGroup>
            <TextField isRequired name="title">
              <Label>Name</Label>
              <Input placeholder="title" />
              <FieldError />
            </TextField>
            <TextField isRequired name="description" type="text">
              <Label>Email</Label>
              <Input placeholder="description" />
              <FieldError />
            </TextField>
          </FieldGroup>
          <Fieldset.Actions>
            <Button type="submit">
              <FloppyDisk />
              Save changes
            </Button>
            <Button type="reset" variant="secondary">
              Cancel
            </Button>
          </Fieldset.Actions>
        </Fieldset>
      </Form>
      <div className="grid grid-cols-3">
        {posts.map((post) => (
          <div key={post.id} className="border-2 rounded-xl p-4 m-4">
            <h1 className="font-bold text-2xl">{post.title}</h1>
            <h3>{post.description}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServerActionpage;
