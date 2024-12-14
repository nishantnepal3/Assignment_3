# PAT_and_GitHub_CLI_and_Jest_Testing 

This project demonstrates the implementation of a basic calculator and its associated unit tests. The project is written in TypeScript and JavaScript, leveraging Jest for testing. Below is a detailed overview of the project structure and functionality.

## Project Structure

```
Assignment_3
├── .github/workflows
│   └── jest-tests.yml     # GitHub Actions workflow for running Jest tests
├── node_modules           # Auto-generated directory containing npm dependencies
├── test
│   └── sum.test.js        # Jest test file for the sum function
├── .gitignore             # Specifies files and folders ignored by Git
├── LICENSE                # License file for the project
├── README.md              # Project documentation (this file)
├── package-lock.json      # Auto-generated file that locks the dependencies
├── package.json           # Project metadata and dependencies
├── tsconfig.json          # TypeScript configuration file
├── calculator.ts          # TypeScript implementation of calculator functionality
├── calculator.js          # Transpiled JavaScript file for the calculator
└── sum.test.js            # Jest test file for sum functionality
```

## Getting Started

### Prerequisites
- Node.js (v16 or above)
- npm (v8 or above)
- TypeScript (v5 or above, globally installed)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd PAT_and_GitHub_CLI_and_Jest_Testing 
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Usage
#### Running the Calculator
- To use the calculator functionality, edit and run the `calculator.ts` file.

- Example:
  ```typescript
  export function add(a: number, b: number): number
    return a + b;
    console.log(add(4, 4));  // Should output 8
  ```

#### Running Tests
- To run the Jest tests, execute:
  ```bash
  npm test or npx jest 'for jest tests'
  ```
  

### Building the Project
To transpile the TypeScript files to JavaScript, run:
```bash
npx tsc
```
The output will be generated in the same directory as the TypeScript files.

## Features
1. **Calculator Functionality**:
   - Basic arithmetic operations (addition, subtraction, multiplication, division).
   - Implemented in `calculator.ts`.

2. **Unit Testing**:
   - Comprehensive tests for the `sum` function in `sum.test.js`.
   - Configured to run using Jest.

3. **Continuous Integration**:
   - GitHub Actions workflow (`jest-tests.yml`) automatically runs the tests on every push.

## Configuration
### tsconfig.json
The TypeScript configuration file includes:
- **Target**: ES6
- **Module**: CommonJS
- **Strict Type Checking**: Enabled

### package.json
Key scripts:
- `test`: Runs Jest tests.
- `build`: Transpiles TypeScript to JavaScript.

## Contributing
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Submit a pull request.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

