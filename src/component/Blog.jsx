import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='font-bold text-xl text-center mb-5'>Question Answer</h1>
            <div className='flex flex-col gap-5'>
                <p>1. Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult.</p>
                <p>2. A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks.</p>
                <p>3. useRef is a React Hook that lets you reference a value that’s not needed for rendering.</p>
                <p> 4. useMemo is a hook that is used in the functional component of React that returns a memoized value.</p>
            </div>
        </div>
    );
};

export default Blog;