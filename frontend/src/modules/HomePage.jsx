function HomePage(){
    return (
        <>
        <div className = "home-page">
            <h2>Hi! Welcome to my Portfolio!</h2>

            <article>
                <p>I'm a student at Oregon State University studying Computer Science and an aspiring Software Engineer. I hope to go into full stack development and specialize in building scalable and user friendly applications. I have a strong interest in front-end and back-end technologies and I'm constantly learning new skills to enhance this passion!</p>

                <p><strong>Technologies used:</strong> </p>

                <dl className = "home-list">
                    <dt><strong>HTML</strong></dt>
                    <dd>Hyper Text Markup Language - defines the structure and layout of a web page.</dd>
                    <dt><strong>CSS</strong></dt>
                    <dd>Cascading Style Sheets - how the structure and layout of the site should look.</dd>
                    <dt><strong>JavaScript</strong></dt>
                    <dd>The functionality of the site including manipulation of data and updates HTML and CSS.</dd>
                    <dt><strong>DOM</strong></dt>
                    <dd>Document Object Model - visual representation of a web application's structure.</dd>
                    <dt><strong>Node</strong></dt>
                    <dd>A live, JavaScript runtime environment. It runs directly in the developer's computer process rather than through a browser. </dd>
                    <dt><strong>React</strong></dt>
                    <dd>An front-end Javascript library that builds UI's using components.</dd>
                    <dt><strong>Mongoose</strong> and <strong>MONGODB</strong></dt>
                    <dd>Mongoose connects MongoDB and Node js. MongoDB is a database that collects and stores data.</dd>
                    <dt><strong>REST API</strong></dt>
                    <dd>Representational State Transfer - API calls that follow a REST architecture.</dd>
                    <dt><strong>CRUD</strong></dt>
                    <dd>Create, Read, Update, Delete - the functions to modify data in a database.</dd>
                </dl>
            </article>
        </div>
           
        </>
    )
}

export default HomePage;