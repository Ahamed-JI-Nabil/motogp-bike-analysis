import React from 'react';

const Blogs = () => {
    return (
        <div className="ml-24 mt-24 ">
            <div className="border-neutral-900 outline outline-offset-2 outline-1 outline-indigo-900 rounded-lg border-solid mt-4 w-3/4 p-4">
                <h1 className="text-3xl">What is context api?</h1>
                <p>Whenever we need to share any data between components we share that data using props!
                    but whenever the app get bigger or we have to make a lots component then we have to pass that data as props between nested components for using in a single component! Then it becomes so much default to maintain and using those data. <br></br>
                    Thats where context api comes in! Context api store and export data and we can use that data at any component we just have to import it and we are good to go! It gives us a way to pass data through the component tree without having to pass props manually at every level.
                </p>
            </div>
            <div className="border-neutral-900 outline outline-offset-2 outline-1 outline-indigo-900 rounded-lg border-solid mt-4 w-3/4 p-4">
                <h1 className="text-3xl">What is Semantic Tags?</h1>
                <p>Semantic tag are those which clearly describe its meaning or for what it used to both the browser or the developer. Semantic tags are (header,nav, section, form, table, article, footer). Its good to use Semantic tags for web applications that gives search engines a better understanding of the web page and place a better web search ranking.
                </p>
            </div>
        </div>
    );
};

export default Blogs;