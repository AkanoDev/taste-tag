import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="flex justify-center w-auto px-8 text-medium-gray">
      <div className="grid lg:grid-cols-5 grid-cols-3 lg:px-20 py-20 lg:gap-16 gap-6">
        <div className="row-end-3 lg:row-end-1">
          <strong className="flex lg:text-3xl text-2xl pb-3">
            <span className="uppercase">Taste</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="36"
              viewBox="0 -960 960 960"
              width="36"
              fill="#E59C44"
            >
              <path d="M570-104q-23 23-57 23t-57-23L104-456q-11-11-17.5-26T80-514v-286q0-33 23.5-56.5T160-880h286q17 0 32 6.5t26 17.5l352 353q23 23 23 56.5T856-390L570-104Zm-57-56 286-286-353-354H160v286l353 354ZM260-640q25 0 42.5-17.5T320-700q0-25-17.5-42.5T260-760q-25 0-42.5 17.5T200-700q0 25 17.5 42.5T260-640ZM160-800Z" />
            </svg>
            <span className="uppercase">ag</span>
          </strong>
          <div className="flex gap-4 pb-14">
            <FaXTwitter className="text-2xl " />
            <FaInstagram className="text-2xl hover:text-orange-600" />
            <FaFacebook className="text-2xl hover:text-blue-700" />
          </div>
          <p>Copyright © 2024 by Tastetag, Inc. All rights reserved.</p>
        </div>

        <div className="flex flex-col gap-6 lg:row-end-1 row-end-3">
          <h2 className="text-xl font-semibold">Contact us</h2>
          <p>623 Harrison St., 2nd Floor, San Francisco, CA 94107</p>
          <p>415-201-6370 hello@omnifood.com</p>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-semibold">Account</h2>
          <p>Create account</p>
          <p>Sign in</p>
          <p>iOS app</p>
          <p>Android app</p>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-semibold">Company</h2>
          <p>About Omnifood</p>
          <p>For Business</p>
          <p>Cooking partners</p>
          <p>Careers</p>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-semibold">Resources</h2>
          <p>Recipe directory</p>
          <p>Help center</p>
          <p>Privacy & terms</p>
        </div>
      </div>
    </footer>
  );
}
