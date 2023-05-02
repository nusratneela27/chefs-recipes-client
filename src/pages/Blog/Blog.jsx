import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <h1 className='text-center fs-3 fw-bold bg-warning bg-opacity-25 pt-5 pb-5'>Question & Answer</h1>
            <Container className='pt-5'>
                <div className='card shadow p-3 mb-5'>
                    <h1 className='fw-bold fs-2'>What is differences between uncontrolled and controlled components?</h1>
                    <p className='fs-4'>
                        Controlled components in React are those whose state and behavior are managed by the parent component. To modify their state and behavior, these components rely on props that are given down from the parent component. Components that control their own state on an internal level are referred to as uncontrolled components.</p>
                </div>
                <div className='card shadow p-3 mb-5'>
                    <h1 className='fw-bold fs-2'>How to validate React props using PropTypes?</h1>
                    <p className='fs-4'>
                        PropTypes is a separate package that you can install using npm, and it allows you to define the types and shapes of the props that your component expects. This can help catch errors early in development and make your code more maintainable.
                        React PropTypes validators are:
                        <ul>
                            <li>any : The prop can be of any data type.</li>
                            <li>array : The prop should be an array.</li>
                            <li>number : The prop should be a number.</li>
                            <li>object : The prop should be an object.</li>
                        </ul>
                    </p>
                </div>
                <div className='card shadow p-3 mb-5'>
                    <h1 className='fw-bold fs-2'>What is differences between nodejs and express js?</h1>
                    <p className='fs-4'>
                        Express is a simple and flexible node. js online application framework that offers a complete set of functionality for creating single- and multi-page, as well as mixed, which web apps. The Node. js, on the other hand, describes it as A platform built on Chrome's JavaScript runtime for easily creating fast, flexible web applications.
                    </p>
                </div>
                <div className='card shadow p-3 mb-5'>
                    <h1 className='fw-bold fs-2'>What is a custom hook, and why will you create a custom hook?</h1>
                    <p className='fs-4'>
                        <strong>Custom Hook</strong>
                        <br />
                        A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks.
                        <br />
                        <strong>Creating a custom hook</strong>
                        <br />
                        <p>
                            The main reason to write a custom hook is for code reusability.It is simple to reuse, the code is cleaner and takes less time to write. Also, it speeds up the rendering of the code by removing a requirement to successively render a custom hook while rendering the entire code.

                        </p>
                    </p>
                </div>
            </Container>
        </div>
    );
};

export default Blog;