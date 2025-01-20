import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";
import { BsYoutube } from "react-icons/bs";


const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (





        <footer className="bg-black  text-center py-3 mt-aut">
            <p className="text-white">&copy; {currentYear}

                Le Travenues Technology Ltd. India.
                All brands are trademarks of their respective owners.Flight App.
                All Rights Reserved


                . Privacy

                . Terms of Use

                . Career

                . Customer Service

            </p>
            <p className="text-white">
                Follow us on:



            </p>
            <div className="">
                <button className="btn btn-outline-light me-2"> <a
                    href="https://facebook.com"
                    target="_blank"

                    aria-label="Facebook"
                    className="text-black-600"
                >
                    <FaSquareFacebook />
                </a></button>

                <button className="btn btn-outline-light me-2 "> <a
                    href="https://instagram.com"
                    target="_blank"

                    aria-label="Instagram"
                    className="text-pink-600"
                >
                    <FaSquareInstagram />
                </a>

                </button>
                <button className="btn btn-outline-light me-2">

                    <a
                        href="https://twitter.com"
                        target="_blank"

                        aria-label="Twitter"
                        className="text-blue-400"
                    >
                        <FaXTwitter />
                    </a>
                </button>
                <button className="btn btn-outline-light me-2">
                    <a
                        href="https://linkedin.com"
                        target="_blank"

                        aria-label="LinkedIn"
                        className="text-blue-800"
                    >
                        <GrLinkedin />
                    </a>
                </button>
                <button className="btn btn-outline-light me-2">
                    <a
                        href="https://youtube.com"
                        target="_blank"

                        aria-label="YouTube"
                        className="text-red"
                    >
                        <BsYoutube />
                    </a>
                </button></div>


        </footer>

    )
}
export default Footer;