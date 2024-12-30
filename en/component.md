# Built-in Components

To quickly build a data management platform, vueAdmin is developed based on elementPlus. In addition to elementPlus components, some common components are also encapsulated as follows:

## Page Components

### dataTable

Data table, one of the most commonly used components, is used to display data information in a list. It integrates features such as pagination and search. It can be used in the `menu` returned by the [User Information](/en/contract#user-information) API.

This component will initiate a GET request to obtain table data and related configurations upon loading. By default, it requests the interface of the same path, but you can also configure fetch parameters to manually control the request content. The returned content is as follows:

```json
{ 
  "code": 200, 
  "message": "", 
  "data": {
    "rows": [],
    "columns": [],
    "actions": [],
    "search": [],
    "advSearch": [],
    "total": 0
  }
}
```

| Field      | Description      | Sample Data                                                   |
| ---------- | ---------------- | ------------------------------------------------------------ |
| rows       | Actual Data      | [<br />{id: 1, title: 'Title', createAt: '2012-12-12'},<br />{id: 2, title: '', createAt: ''}<br />] |
| columns    | Table Column Config | [<br />{key: 'id', label: 'ID'},<br />{key: 'title', label: 'Title'},<br />{key: 'createAt', label: 'Created At'}<br />] |
| actions    | Table Action Config | [<br />{key: "create", label: "Create", icon: "ri-add-circle-line", component: "form", positions: ["top"]}<br />] |
| search     | Search Config    | [<br />{ key: "name", label: "Name", placeholder: "Enter Name" }<br />] |
| advSearch  | Advanced Search Config | [<br />{ key: "name", label: "Name", placeholder: "Enter Name" }<br />] |
| total      | Total Data Count | 10                                                           |

#### columns

Table column configuration, the specific format is as follows:

| Field           | Data Format | Description     | Remarks                                  |
| --------------- | ----------- | --------------- | ---------------------------------------- |
| key             | string      | Unique ID       | Corresponds to the key in rows.          |
| label           | string      | Display Name    |                                          |
| component       | string      | Component Name  | Can use [Inline Component](#inline-components)    |
| componentProps  | {}          | Component Config|                                          |
| fetch           | {}          | Fetch Data Config | See [Data Fetching](#data-fetching)             |
| props           | {}          | Column Config   | Column configuration in elementPlus's el-table |

#### actions

Table action configuration, the specific format is as follows:

| Field           | Data Format                      | Description        | Remarks                                                        |
| --------------- | -------------------------------- | ------------------ | -------------------------------------------------------------- |
| key             | string                           | Unique ID          | Used when automatically constructing fetch URL                 |
| label           | string                           | Display Name       |                                                                |
| icon            | ri-\*                            | Icon, not displayed if absent | RemixIcon icon naming                                         |
| component       | string                           | Component Name     |                                                                |
| componentProps  | {}                               | Component Config   |                                                                |
| showType        | dialog \| drawer \| slideover    | Display Method     | Default is dialog<br />drawer and slideover are side slides    |
| showTypeProps   | {}                               | Display Method Config |                                                              |
| positions       | ['top', 'row']                   | Display Position   | top: Top left of the table<br />row: Inside the table, where component = actions column |
| props           | {}                               | Current Action Button Config | el-button configuration in elementPlus                       |
| fetch           | {}                               | Fetch Data Config  | See [Data Fetching](#data-fetching)                                    |
| submit          | {}                               | Submit Data Config | See [Data Submission](#data-submission)                                 |
| disabled        | {top: {}, row: {}}               | Disable Conditions | Configuration conforming to [sift](https://github.com/crcn/sift.js#readme), handles top and row separately |
| invisible       | {top: {}, row: {}}               | Visibility         | Same as above                                                 |

#### search

Search configuration will be displayed in the upper right corner of the table. It is recommended to configure 1~2 items, and more can be placed in advSearch. The specific format can refer to [Form Components](#form-components).

#### advSearch

Advanced search configuration items, same format as search configuration.

## Form Components

To configure a complete form through an API, you first need an API to fetch the form item configuration. Then, the form is rendered and submitted.

For convenient data manipulation, the interface for fetching form data is configured at the parent level of the current form, along with the configuration for form submission.

This configuration is only for configuring each item of a complete form. Details are as follows:

| Field           | Data Format | Description | Remarks   |
| --------------- | ----------- | ----------- | --------- |
| key             | string      | Unique ID   |           |
| label           | string      | Display Name|           |
| placeholder     | string      | Placeholder |           |
| component       | string      | Component Name | See below |
| componentProps  | {}          | Component Config |       |

### input

Text box, default component.

Form items that do not declare a component will be rendered with the current component. Component configuration can refer to elementPlus's el-input.

Note: Unhandled component will also render this component, and the value of component is the type of el-input. For example, `component="textarea"` will render a multi-line text based on el-input.

### select

Dropdown menu, supports the following configuration items:

| Field         | Data Format                                                     | Description     | Remarks                                             |
| ------------- | --------------------------------------------------------------- | --------------- | --------------------------------------------------- |
| options       | [{ label: "Male", value: "male" }]                             | Define Menu Items | Note, the current configuration is outside componentProps, planned to be unified within. |
| fetchOptions  | {<br/>                url: "/products",<br/>                method: "POST",<br/>                dataKey: '',<br/>                labelKey: 'name',<br/>                valueKey: 'id',<br/>                params: {limit: 999},<br/>            } | Fetch Menu Items Asynchronously | Note, the current configuration is outside componentProps, planned to be unified within. |

### date

Date picker

## Inline Components

For further processing of display content. For example, rendering a column of image URIs in a table as a column of images; or adding a hyperlink to the current content, allowing detailed information of the content to be viewed upon clicking.

> [!WARNING]
>
> Note:
> The components are available, but I always feel the configuration items are messy and need to be organized/unified.

### copy

A copy button is displayed after (or before) the current content, clicking it copies the current content. The following parameters can be configured:

| Field     | Data Format        | Description | Remarks            |
| --------- | ------------------ | ----------- | ------------------ |
| position  | before \| after    | Button Position | Default is before |
| type      |                    | Button Type | el-button's type   |

### detail

The display content will be shown in the form of a hyperlink, and upon clicking, a popup will show data details. The following parameters can be configured:

| Field          | Data Format                      | Description       | Remarks                                                |
| -------------- | -------------------------------- | ----------------- | ------------------------------------------------------- |
| showType       | dialog \| drawer \| slideover    | Display Method    | Default is dialog<br />drawer and slideover are side slides |
| showTypeProps  | {}                               | Display Method Config |                                                     |
| fetch          | {}                               | Fetch Data Config | See [Data Fetching](#data-fetching)                           |

### enum

Displays the content in the form of el-tag. The following parameters can be configured:

| Field    | Data Format | Description                                                 | Remarks                                                      |
| -------- | ----------- | ----------------------------------------------------------- | ------------------------------------------------------------ |
| options  | [{}]        | Each item el-tag's configuration. The current content is used to find the same value in options and display as the label value. | {<br/>    label: "Female",<br/>    value: "2",<br/>    props: {<br/>        type: "danger",<br/>    },<br/>}, |

### table

The display content will be shown in the form of a hyperlink, and upon clicking, a popup will show a data list. The following parameters can be configured:

| Field          | Data Format                      | Description       | Remarks                                                |
| -------------- | -------------------------------- | ----------------- | ------------------------------------------------------- |
| showType       | dialog \| drawer \| slideover    | Display Method    | Default is dialog<br />drawer and slideover are side slides |
| showTypeProps  | {}                               | Display Method Config |                                                     |
| fetch          | {}                               | Fetch Data Config | See [Data Fetching](#data-fetching)                           |

## Data Fetching

When fetching data, vueAdmin will initiate a GET request with a token and return data in a standard format. Data fetching has been uniformly configured for the entire project, with the key being fetch and the value being an object. The specific configuration is as follows:

| Field   | Data Format                                                 | Description      | Remarks                                                         |
| ------- | ------------------------------------------------------------ | ---------------- | --------------------------------------------------------------- |
| url     | string                                                       | Request URL, can be empty. | The default request interface address is the same as the current URL address path. If it is a popup request, the key configured in params is appended to the current GET parameters. |
| params  | [<br />'string': [key, alias],<br /> {key: value}<br />]    | GET Parameters   | Each item in the array can be a string, array, or object.<br />string: The key of the GET parameter, and the value will find the same key value in the current data.<br />[key, alias]: Similar to string mode, the value finds the same key value in the current data, but the alias is used as the key when sending GET parameters.<br />{key: value}: Equivalent to adding a fixed parameter in GET parameters |
| config  | {}                                                           | Request Header Config | Please refer to `axios`                                             |

## Data Submission

When submitting data, vueAdmin will initiate a POST request with a token and return data in a standard format. Data submission has also been uniformly configured for the entire project, with the key being submit and the value being an object. The specific configuration is as follows:

| Field   | Data Format | Description          | Remarks                  |
| ------- | ----------- | -------------------- | ------------------------ |
| url     | string      | Submission URL, can be empty. | Logic same as fetch's url    |
| params  | []          | GET Parameters during submission | Logic same as fetch's params |
| data    | []          | POST Parameters during submission | Logic same as params          |
| config  | {}          | Request Header Config | Please refer to `axios`        |

> [!tip]
>
> If submit is not configured, the configuration information in fetch will be used.

