import React from 'react';

const Blogs = () => {
    return (
        <div className='w-75 m-auto '>
            <div className='border my-4 p-4 shadow rounded'>
                <h1>Q1: Difference between javascript and node.js</h1>
                <p>a. JavaScript is a basic programming language that runs on the JavaScript Engine in any browser. While Node JS is an interpreter or runtime environment for the JavaScript programming language, it requires libraries that can be readily accessible from JavaScript programming to make it more useful.
                    b. For one online application, JavaScript is often utilized for any client-side activities. An activity might be dealing with business validation, dynamic page display at a set time period, or a simple Ajax request. For every online application, they are used for the maximum amount of time. Node JS, on the other hand, is mostly used for non-blocking operations on any operating system. Non-blocking operations on an operating system include writing or executing a shell script, retrieving specified hardware-related information in a single call, obtaining installation certificate data in the system, and doing a large number of defined tasks.
                    JavaScript may run on any engine, including FireFox's Spider Monkey, Safari's JavaScript Core, and V8 (Google Chrome). As a result, JavaScript programming is incredibly simple to create, and any operating environment is equivalent to a full browser. Node JS, on the other hand, only supports the V8 engine, which is unique to Google Chrome. However, written JavaScript code may execute in any environment, regardless of whether it supports the V8 engine. As a result, there are no browser-specific constraints.</p>
            </div>
            <div className='border my-4 p-4 shadow rounded'>
                <h1>Q2: When should you use node.js?</h1>
                <p>Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.</p>
            </div>
            <div className='border my-4 p-4 shadow rounded'>
                <h1>Q3: When should you use mongodb?</h1>
                <p>SQL. NoSQL databases like MongoDB are a good choice when your data is document-centric and doesn't fit well into the schema of a relational database, when you need to accommodate massive scale, when you are rapidly prototyping, and a few other use cases.</p>
            </div>
            <div className='border my-4 p-4 shadow rounded'>
                <h1>Q4: Difference between sql and nosql?</h1>
                <p>1. Relational databases are SQL, while non-relational databases are NoSQL. <br />
                    2. SQL databases have a specified schema and employ structured query language. For unstructured data, NoSQL databases use dynamic schemas.<br />
                    3. SQL databases scale vertically, but NoSQL databases scale horizontally.<br />
                    4. NoSQL databases are document, key-value, graph, or wide-column stores, whereas SQL databases are table-based.<br />
                    5. SQL databases excel at multi-row transactions, while NoSQL excels at unstructured data like documents and JSON.</p>
            </div>
            <div className='border my-4 p-4 shadow rounded'>
                <h1>Q5: what is the purpose of jwt and how does it work?</h1>
                <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
            </div>
            <div className='border my-4 p-4 shadow rounded'>
                <h1>Q6: Authentication</h1>
                <p>Authentication is the act of proving an assertion, such as the identity of a computer system user. In contrast with identification, the act of indicating a person or thing's identity, authentication is the process of verifying that identity.</p>
            </div>
            <div className='border my-4 p-4 shadow rounded'>
                <h1>Q7: Web Tokens in JSON</h1>
                <p>JSON web token (JWT), pronounced "jot", is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. Again, JWT is a standard, meaning that all JWTs are tokens, but not all tokens are JWTs.</p>
            </div>

        </div>
    );
};

export default Blogs;