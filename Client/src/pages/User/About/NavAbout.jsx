import { People } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
function NavAbout() {
    return (
        <nav class="mt-5 mb-2 flex justify-between" aria-label="Breadcrumb">
            <div class="flex items-center space-x-1 md:space-x-3 list-none">
                <li class="inline-flex items-center">
                    <Link to="#" class="inline-flex items-center text-4xl font-medium text-blue-500">
                        Hỏi đáp
                    </Link>
                </li>
                <li>
                    <div class="flex items-center">
                        <svg
                            class="w-6 h-6 text-blue-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                        <a to="#" class="ml-1 text-3xl font-medium text-gray-600 hover:text-gray-900 ">
                            Hướng dẫn thủ thuật pro cho bro
                        </a>
                    </div>
                </li>
            </div>
            <li className="list-none">
                <Link to="#" className="text-2xl ">
                    <People className="mr-2 text-blue-400"></People>
                    Dang nhap
                </Link>
            </li>
        </nav>
    );
}

export default NavAbout;
