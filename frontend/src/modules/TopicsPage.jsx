function TopicsPage(){
    return (
        <>
           <h2>Web Development Topics</h2>
            <nav className="local">
                <a href="#servers">Web Servers</a>
                <a href="#frontend">Frontend Design</a>
                <a href="#css">Stylesheets</a>
                <a href="#forms">Form Usability</a>
                <a href="#nodeExpress">Node and Express</a>
            </nav>
            <article id="servers">
                <h3>About Web Servers</h3>

                    <p>Typically, <strong>/</strong> or <strong>/index.html</strong> is reserved for the designated home page. The <strong> Apache (OSU Engineering server) </strong> server will use this default html file. In comparison to other servers, Microsoft's .NET uses <strong>default.html</strong>. Other servers use <strong>index.js </strong> or <strong>index.php</strong>.</p>

                    <p>The inspector network is a powerful tool that is used for analyzing and debugging network activity. In the output screen, the status, method, IP policies, language, cache instructions, and browser version is usually found. In the web server, request latency and server response time is  included in the inspector tab in comparison to the local computer.</p>

                    <p>The favicon.ico file has a status of 200 to indicate that the file can be located by the server. The 404 error from the main.css and main.js files indicates that the files can't be found.</p>

            </article>

            <article id="frontend">
             <h3>Frontend Design</h3>
                
            <p>Front end design refers to the practice of creating UI (User Interface) or UX (User Experience). It involves what the user sees and how they will interact with a web application. The design of a website must have a consistent color scheme, good readability (through fonts and typography), and use of icons. </p>


            <p>Five E's of Usability - the steps to achieving good UI </p>

            <dl>
            <dt><strong>Effective</strong></dt>
            <dd>Assists users in reaching their goal while using the application.</dd>
            <dt><strong>Efficient</strong></dt>
            <dd>Simple and easy steps for users to reach their destination.</dd>
            <dt><strong>Easy to navigate</strong></dt>
            <dd>Should be intuitive, especially for users who never used the application before.</dd>
            <dt><strong>Error free</strong></dt>
            <dd>Erasing any common user errors and improving accessibility. </dd>
            <dt><strong>Enjoyable</strong></dt>
            <dd>Designed in a way to encourage the users to return to the site.</dd>

            </dl>

            <p>anchors in external content, internal content, and page to page in ol list</p>
            <p>There are various ways to link to content in a web application: </p>
            <ol>
                <li>External content: this can be done using the 'a' tag and a 'href' URL to link to the external site.</li>
                <li>Internal content: content within a page can be linked to each other using IDs.</li>
                <li>Page to page: to go to another page within the same site can be done using the 'nav' and anchor 'a' tags.</li>
            </ol>

            
            </article>

            <article id = "css">
                <h3>Stylesheets</h3>
                <p>There are 5 ways to incorporate styles: externally, imported, embedded, inline, and through javascript. External CSS is typically used when an external css file is called from an HTML file using the link tag. It can also be called using @import. Embedded styles are called from within an HTML file using the style tag. Inline is used within an attribute or element, but it's not the most practiced method. Javascript also has the ability to incorporate CSS styles. </p>
            </article>
            
            <article id = "forms">
                <h3>Form Usability</h3>
                <p>What are the 6 major goals of accessible forms? And why?</p>
                <p>Form accessibility is extremely beneficial in web development. There are 6 major goals of accessible forms. Clear instructions, the reason for gathering user data, autofocus on the first item, all form controls can be filled using the keyboard, tab indexing enabled, and validation messages to acknowledge the completion of the form.</p>
            </article>

            <article id = "nodeExpress">
                <h3>Node and Express</h3>
                <p><strong>Node</strong> is a JavaScript runtime built on a v8 Chrome engine. Programmers can run JavaScript on the server side for high performance and scalable applications. <strong>NPM</strong> is the default package manager for Node.js and it manages JavaScript packages. <strong>Express JS</strong> is a web application framework and provides robust features for Node JS. </p>
            </article>


        </>
    )
}

export default TopicsPage;