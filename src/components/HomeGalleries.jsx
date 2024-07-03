import Gallery from "./Gallery";
const HomeGalleries = () => (

    <>
        <div className="gallery py-4">
        <h3 className="text-white mb-3 text-start ms-3">Marvel Movies</h3>
        <Gallery nameMovie="marvel" />
        </div>
        <div className="gallery py-4">
            <h3 className="text-white mb-3 text-start ms-3">Watch It Again</h3>
        <Gallery nameMovie="rocky" />
        </div>
        <div className="gallery py-4">
            <h3 className="text-white mb-3 text-start ms-3">The Hobbit</h3>
        <Gallery nameMovie="the-hobbit" />
    </div>
    </>

)

export default HomeGalleries;