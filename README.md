# Expense Tracker CLI

**_Created by project https://roadmap.sh/projects/expense-tracker_**

This is a simple expense tracker application to manage your finances.

## Installation:

1. Install [Node.js](https://nodejs.org/en)
2. Open [Command Line Interface](https://en.wikipedia.org/wiki/Command-line_interface) provided by your operating system
3. Create a folder and copy [repository](https://github.com/DedRobin/expense-tracker-cli) to it

```
mkdir expense-tracker
cd expense-tracker
git clone git@github.com:DedRobin/expense-tracker-cli.git .
```

4. Move to repository folder and enter the following command

```
npm i -g .
```

## Usage

### The following commands are available:

- **add -D, --description \<string> -A, --amount \<number>**: creates a new expense with the provided description and amount
- **update -I, --id \<number> -D, --description \<string> -A, --amount \<number>**: updates an expense by its ID with a new description and an amount
- **delete -I, --id \<number>**: delete an expense with its ID
- **list**: show a list of expenses
- **summary -M, --month \[number] -Y, --year \[number]**: Show a summary of the expenses for the specified month and year (if they are provided)

| Command | Argument          | Type   | Required | Description                                                                            |
| ------- | ----------------- | ------ | -------- | -------------------------------------------------------------------------------------- |
| add     | -D, --description | string | yes      | creates a new expense with the provided description and amount                         |
|         | -A, --amount      | number | yes      |                                                                                        |
| update  | -I, --id          | number | yes      | updates an expense by its ID with a new description and an amount                      |
|         | -D, --description | string | yes      | updates an expense by its ID with a new description and an amount                      |
|         | -A, --amount      | number | yes      |                                                                                        |
| delete  | -I, --id          | number | yes      | delete an expense with its ID                                                          |
| list    |                   |        | yes      | show a list of expenses                                                                |
| summary | -M, --month       | number | no       | show a summary of the expenses for the specified month and year (if they are provided) |
|         | -Y, --year        | number | no       |                                                                                        |
