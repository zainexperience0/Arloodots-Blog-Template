import { nanoid } from "nanoid";

export const prePath = "main";

export const searchTypes = ["email", "name", "phone", "phone"];

export const allModels = [
  {
    name: "Field Test",
    model: "allFields",
    meta: {
      title: "name",
      description: "password",
    },
    fields: [
      {
        name: "Name",
        slug: "name",
        type: "textInput",
        defaultValue: "",
        required: true,
        hidden: false,
        readonly: false,
        dataType: "string",
        customClassName: "",
      },
      {
        name: "Password",
        slug: "password",
        type: "passwordInput",
        defaultValue: "",
        required: false,
        hidden: false,
        readonly: false,
        dataType: "string",
        customClassName: "",
      },
      {
        name: "Age",
        slug: "age",
        type: "numberInput",
        defaultValue: 0,
        required: false,
        hidden: false,
        readonly: false,
        dataType: "string",
        customClassName: "",
      },
      {
        name: "Email",
        slug: "email",
        type: "emailInput",
        defaultValue: "",
        required: false,

        hidden: false,
        readonly: false,
        dataType: "string",
        customClassName: "",
      },

      {
        name: "Phone Number",
        slug: "phone",
        type: "phoneInput",
        defaultValue: "",
        required: false,
        hidden: false,
        readonly: false,
        dataType: "string",
        customClassName: "",
      },
      {
        name: "Text Area",
        slug: "content",
        type: "textareaInput",
        defaultValue: "",
        required: false,
        hidden: false,
        readonly: false,
        dataType: "string",
        customClassName: "",
      },
      {
        name: "Date",
        slug: "date",
        type: "dateInput",
        defaultValue: new Date(),
        required: false,
        hidden: false,
        readonly: false,
        dataType: "string",
        customClassName: "",
      },
      {
        name: "Switch",
        slug: "switch",
        type: "switchInput",
        defaultValue: true,
        required: false,
        hidden: false,
        readonly: false,
        dataType: "string",
        customClassName: "",
      },
      {
        name: "Checkbox",
        slug: "checkbox",
        type: "checkboxInput",
        defaultValue: true,
        required: false,

        hidden: false,
        readonly: false,
        dataType: "string",
        customClassName: "",
      },
      {
        name: "Select",
        slug: "select",
        type: "selectInput",
        defaultValue: "1",
        options: ["1", "2", "3"],
        required: false,

        hidden: false,
        readonly: false,
        dataType: "string",
        customClassName: "",
      },
      {
        name: "Multi Select",
        slug: "multiSelect",
        type: "msSelectInput",
        defaultValue: ["1", "2"],
        options: ["1", "2", "3"],
        required: false,

        hidden: false,
        readonly: false,
        dataType: "string",
        customClassName: "",
      },
      {
        name: "Radio",
        slug: "radio",
        type: "radioInput",
        defaultValue: "1",
        options: ["1", "2", "3"],
        required: false,

        hidden: false,
        readonly: false,
        dataType: "string",
        customClassName: "",
      },
      {
        name: "Toogle",
        slug: "toogle",
        type: "toogleInput",
        defaultValue: "1",
        options: ["1", "2", "3"],
        required: false,

        hidden: false,
        readonly: false,
        dataType: "string",
        customClassName: "",
      },
      {
        name: "Multi Toogle",
        slug: "lists",
        type: "mstoogleInput",
        defaultValue: ["1", "3"],
        options: ["1", "2", "3"],
        required: false,

        hidden: false,
        readonly: false,
        dataType: "string",
        customClassName: "",
      },
      {
        name: "Markdown",
        slug: "markdown",
        type: "markdownInput",
        defaultValue: "",
        required: false,

        hidden: false,
        readonly: false,
        dataType: "string",
        customClassName: "",
      },
      {
        name: "URL",
        slug: "url",
        type: "urlInput",
        defaultValue: "",
        required: false,
        hidden: false,
        readonly: false,
        dataType: "string",
        customClassName: "",
      },
      {
        name: "File",
        slug: "file",
        type: "fileInput",
        defaultValue: "",
        required: false,
        hidden: false,
        readonly: false,
        dataType: "string",
        customClassName: "",
      },
      {
        name: "Redirect Button",
        slug: "redirectButton",
        type: "redirectButton",
        defaultValue: "https://google.com",
        required: false,
        hidden: false,
        readonly: false,
        dataType: "string",
        redirectLink: "",
        customClassName: "",
      },
    ],
  },
  {
    name: "Blogs",
    model: "blog",
    meta: {
      title: "title",
    },
    updateField: "updatedAt",
    searchConfig: {
      searchFields: ["title"],
      sortBy: "desc",
      sortField: "createdAt",
    },
    fields: [
      {
        name: "Title",
        slug: "title",
        type: "textInput",
        defaultValue: "",
        required: true, // tells whether this field is required in UI inputs
        dataType: "string", // Schema datatype mapping
        customClassName: "",
        backend: ["findFirst","findUnique","findMany","create","update","delete"],
        frontend: ["list","view","update","delete","create"],
        valueGetter: () => {
          return ""
        }
      },
      {
        name: "Content",
        slug: "content",
        type: "markdownInput",
        defaultValue: "",
        required: false,
        dataType: "string",
        customClassName: "",
        backend: ["findFirst","findUnique","create","update","delete"],
        frontend: ["list","view","update","delete","create"],
        valueGetter: () => {
          return ""
        }
      },
      {
        name: "Tags",
        slug: "tags",
        type: "tagInput",
        defaultValue: [],
        options: ["Next-js", "Tailwind", "Guide", "Feature"],
        required: false,
        dataType: "array",
        customClassName: "",
        backend: ["findFirst","findUnique","findMany","create","update","delete"],
        frontend: ["list","view","update","delete","create"],
        valueGetter: () => {
          return ""
        }
      },
      {
        name: "Created At",
        slug: "createdAt",
        type: "",
        defaultValue: "",
        required: false,
        dataType: "time",
        customClassName: "",
        backend: ["findFirst","findUnique","findMany"],
        frontend: ["list","view"],
        valueGetter: () => {
          return ""
        }
      },
      {
        name: "Updated At",
        slug: "updatedAt",
        type: "",
        defaultValue: "",
        required: false,
        dataType: "time",
        customClassName: "",
        backend: ["findFirst","findUnique","findMany"],
        frontend: ["list","view"],
        valueGetter: () => {
          return ""
        }
      },
    ],
  },
  {
    name: "Comments",
    model: "comment",
    meta: {
      title: "content",
      description: "content",
    },
    updateField: "updatedAt",
    searchConfig: {
      searchFields: ["content"],
      sortBy: "asc",
      sortField: "createdAt",
    },
    fields: [
      {
        name: "",
        slug: "content",
        type: "markdownInput",
        required: false,
        dataType: "string",
        customClassName: "",
        backend: ["findFirst","findUnique","findMany","create","update","delete"],
        frontend: ["list","view","update","delete","create"],
        valueGetter: () => {
          return ""
        }
      },
      {
        name: "Created At",
        slug: "createdAt",
        type: "",
        defaultValue: "",
        required: false,
        dataType: "time",
        customClassName: "",
        backend: ["findFirst","findUnique","findMany"],
        frontend: ["list","view"],
        valueGetter: () => {
          return ""
        }
      },
      {
        name: "Updated At",
        slug: "updatedAt",
        type: "",
        defaultValue: "",
        required: false,
        dataType: "time",
        customClassName: "",
        backend: ["findFirst","findUnique","findMany"],
        frontend: ["list","view"],
        valueGetter: () => {
          return ""
        }
      },
      {
        name: "Blog",
        slug: "blog",
        type: "relation",
        defaultValue: "",
        required: true,
        dataType: "relation",
        customClassName: "",
        backend: ["create"],
        frontend: [],
        valueGetter: () => {
          return ""
        }
      },
    ],
  },
];