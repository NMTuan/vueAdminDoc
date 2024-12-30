# Interface Agreement

> [!tip] Note:
>
> vueAdmin is a convention-based program and may not integrate directly into your project. You need to modify the existing API according to the conventions or develop a separate set of APIs.

## Standard Format

All interfaces uniformly return data in the following format:

```json
{
    "code": 200,
    "message": "",
    "data": {}
}
```

| Field   | Data Type | Meaning                                                   |
| ------- | ---------- | ------------------------------------------------------------ |
| code    | number   | Status code, 200 for normal, others can be customized.     |
| message | string   | Status message, no action if empty; if it has content, it will pop up in the top right corner. |
| data    | object   | Data body, the actual data content returned by each interface. |

Currently, this format is fixed. It may become variable in the future according to actual situations.

## Login

Interface address: `/auth/login`

This uses the standard `jwt` authentication mode.

The login page will submit the following data to the interface via POST:

| Field     | Data Type | Description                                                                                     |
| --------- | ---------- | ----------------------------------------------------------------------------------------------- |
| username | string   | Login account                                                                                 |
| password | string   | Login password                                                                                 |
| remember | boolean  | Whether to stay logged in for a long time, note: the frontend does not process this item, the backend needs to return tokens with different expiration times based on the submitted value |

The interface must return token information according to the standard format, as follows:

```json
{ 
    "code": 200, 
    "message": "", 
    "data": {
        "token": "the token string"
    }
}
```

## Logout

Interface address: `/auth/logout`

Currently, the program does not request any interface, it only clears the local token and redirects to the login page.

## User Information

Interface address: `/auth/info`

This interface is the core of vueAdmin. When a user logs in successfully or when the browser first accesses the platform, vueAdmin will carry the token to send a GET request to this interface to get the current user's menu and permissions. The interface should return in the following format:

```json
{ 
    "code": 200, 
    "message": "", 
    "data": {
        "site": { // Site information
            "title": "", // Title displayed in the upper left corner of the page
            "logo": "" // Logo path displayed in the upper left corner of the page, if not present, it will not be displayed. Note the size, the frontend does not control the image size.
        },
        "menu": [], // Functional menu on the left side of the page, see below
        "topbar": [] // Functional menu at the top right corner of the page, see below
    }
}
```

### menu

menu is the embodiment of the current user's menu and functional permissions, defined as an array with infinite levels, the basic format is as follows:

```json
[
    {
        "label": "Home", // Content displayed in the menu for this function
        "key": "index", // Unique id
        "icon": "ri-home-line", // Icon, if not present, it will not be displayed. Supports complete remixIcon icon naming.
        "component": "index", // Component used for this function, if left empty, it renders the Blank component.
        "children": [] // Subset
    }
]
```

### topbar

topbar is used to define the functional menu in the top right corner of the page, commonly used for quick actions/messages/user menus, etc. The basic format is as follows:

```json
[
    {
        "label": "Site Settings", // Menu name
        "to": "/site/config", // Address to jump to after clicking
        "image": "", // Image address, if not present, it will not be displayed
        "icon": "ri-tools-line", // Icon, if not present, it will not be displayed
        "activeIcon": "", // Activated icon, some components can be set, such as fullScreen darkMode
        "component": "" // Component name, some components are built-in, see below
    },
    "fullScreen" // Abbreviated
]
```

Currently implemented components are as follows:

| Component Name | Description                                        | Abbreviated as string |
| -------------- | --------------------------------------------------- | --------------------- |
| dropdown       | Dropdown menu, the submenu key is `dropdown`, value is an array of the basic format |                       |
| fullScreen     | Button to toggle full screen                        | ✔                     |
| darkMode       | Button to toggle dark mode (the dark mode style is not adapted) | ✔                     |
| i18n           | Dropdown menu to switch languages (unfinished)      | ✔                     |

*Abbreviated as string: If there is no other configuration, the current object can be abbreviated as a string*

