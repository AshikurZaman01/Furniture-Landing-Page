import { FaSearch } from 'react-icons/fa'

const Searchbar = () => {
    return (
        <div className="relative inline-block z-30 w-full md:w-auto">
            <input
                className="w-full md:w-80 px-6 py-2 bg-white/25 rounded-full border border-gray-300 focus:outline-none placeholder:text-white"
                type="text"
                placeholder="Search for interior"
                aria-label="Search for interior"
            />
            <div>
                <FaSearch
                    className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-primary rounded-full text-white text-xl p-1 cursor-pointer"
                />
            </div>
        </div>
    )
}

export default Searchbar