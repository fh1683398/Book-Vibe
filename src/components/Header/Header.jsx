// import heroImage from "../../assets/boi-poka-bg.png"

const Header = () => {
    return (
        <div className='relative hero-bg py-32 px-4 md:px-8 lg:px-16 max-w-292 mx-auto lg:min-h-138 bg-cover bg-center rounded-lg flex items-center mb-10 md:mb-25'>

            <div className='absolute inset-0 bg-linear-to-r from-amber-300/30 to-transparent'></div>

            <div className='relative z-10'>

                <h1 className="mb-6 text-4xl md:text-5xl md:max-w-1/2 lg:max-w-1/2 font-bold text-white">Books to freshen up your bookshelf</h1>
                
                <a href="#books"><button className="border border-white px-4 py-2 rounded-lg text-white hover:bg-gray-100 hover:text-black font-sans font-medium">View The List</button></a>
            </div>

        </div>
    );
};

export default Header;