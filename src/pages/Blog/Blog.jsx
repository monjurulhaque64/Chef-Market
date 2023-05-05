import React from 'react';
import NavBar from '../shere/NavBar/NavBar';
import Footer from '../shere/Footer/Footer';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


const Blog = () => {

    const printDocument = () => {
        const input = document.getElementById('pdf');
        html2canvas(input, { scrollY: -window.scrollY }).then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF('p', 'mm', 'a4');
          const pageWidth = pdf.internal.pageSize.getWidth();
          const pageHeight = pdf.internal.pageSize.getHeight();
          const ratio = canvas.width / canvas.height;
          const imgHeight = pageHeight;
          const imgWidth = imgHeight * ratio;
          const position = 0;
    
          pdf.addImage(imgData, 'PNG', position, position, imgWidth, imgHeight);
          pdf.save('myWebPage.pdf');
        });
      };
      
    return (
        <div id="pdf" className='container mx-auto'>
            <NavBar></NavBar>
            <div className='mt-32 m-32'>
                <div className='text-center mt-10 mb-10'>
                    <h1 className='font-bold text-green-500 text-lg'>1. Tell us the differences between uncontrolled and controlled components.</h1>
                    <p className='mt-5'> <span className='font-bold'>Controlled Components:</span>
                        <br />

                        As the name says, in the controlled component the form input element’s values and mutations are totally driven by event handlers and the value of the input element is always inferred from the state.
                        <br />
                        <span className='font-bold'>Uncontrolled Components:</span> <br />
                        If you have gone through the above points and examples of the controlled component then you have already guessed how uncontrolled components work. Yes, they don’t use any states on input elements or any event handler. This type of component doesn’t care about an input element’s real-time value changes.
                    </p>
                </div>
                <div className='text-center mt-10 mb-10'>
                    <h1 className='font-bold text-green-500 text-lg'>2. How to validate React props using PropTypes.</h1>
                    <p className='mt-5'>React PropTypes are a very good way to help you catching bugs by validating data types of values passed through props. You can also flag props as required or set default values.

                        Picture the situation where you just picked up a component written by another developer and have to figure out which properties the component needs, which ones are required, what is the correct type for each one, etc. If he used Proptypes, he made your life easier in this situation.</p>
                </div>
                <div className='text-center mt-10 mb-10'>
                    <h1 className='font-bold text-green-500 text-lg'>3. Tell us the difference between nodejs and express js.</h1>
                    <p className='mt-5'>Node.js is a JavaScript runtime that allows developers to run JavaScript code on the server-side. It provides an environment for executing JavaScript code outside of a web browser. Node.js includes built-in modules for file system I/O, networking, and other common tasks.

                        Express.js is a web application framework for Node.js. It provides a set of tools and utilities for building web applications, including routing, middleware, and templating engines. Express.js is often used to build RESTful APIs and web applications.

                        In essence, Node.js is a runtime environment for JavaScript, while Express.js is a framework built on top of Node.js that provides additional features and tools for building web applications. While Node.js provides basic functionality for building web applications, Express.js simplifies the process and provides a more structured approach.</p>
                </div>
                <div className='text-center mt-10 mb-10'>
                    <h1 className='font-bold text-green-500 text-lg'>4. What is a custom hook, and why will you create a custom hook?</h1>
                    <p className='mt-5'>Custom Hook is a JavaScript function which we create by ourselves, when we want to share logic between other JavaScript functions. It allows you to reuse some piece of code in several parts of your app. <br />
                        When we want to share the logic between other components, we can extract it to a separate function. According to official documents, the custom hook has to:

                        start with the key word use
                        call other hooks

                        Because custom hook is a JS function, the Rules of Hooks apply to it as well. </p>


                        <button onClick={printDocument} className="mt-10 mx-auto text-center btn btn-outline btn-primary">PDF</button>
                </div>
                
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;