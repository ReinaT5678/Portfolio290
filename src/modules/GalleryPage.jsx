
function GalleryPage(){

    const images = [
        {
            filepath: '/src/images/datamanagement-code.png',
            caption: 'Part of my code from my CS344 - Database Management Systems class which uses a two-pass multi-way sorting algorithm to process a csv file.',
            title: "&copy; 2024 Reina Takahara"
        },
        {
            filepath: '/src/images/robotics-website.png',
            caption: 'Created and launched a website for the Robotics club at Oregon State University.',
            title: "&copy; 2024 Reina Takahara"
        },
        {
            filepath: '/src/images/national-anthem-performance.png',
            caption: 'Every year I sing the National Anthem for a basketball / baseball game for the University of Hawaii.',
            title: "&copy; 2024 Reina Takahara"
        },
        {
            filepath: '/src/images/lake-paddleboarding.png',
            caption: 'My friend and Is first time paddleboarding on a lake in Black Butte.',
            title: "&copy; 2024 Reina Takahara"
        }
    ]
    return (
        <>
           <h3>My Gallery</h3>
           <p>Feel free to view some of my past coding projects and side hobbies!</p>
           <article className="gallery">
                {images.map((image, index) => (
                   <figure key={index}>
                        <img src={image.filepath} alt={image.title}/>
                        <figcaption>{image.caption}</figcaption>
                   </figure>
                ))}
           </article>
        </>
    )
}

export default GalleryPage;