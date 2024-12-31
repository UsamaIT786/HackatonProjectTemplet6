
import Link from "next/link";
import Image from "next/image";
import { MdPersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Header() {
  return (
    <>
      <div className="navbar">
        <div className=" logo ">

            <Image src="/Images/Frame 168.png"alt="logo"width={150}height={60}/>


        </div>

        <div className="navbtns">
        <ul className="head">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/Shop">Shop</Link>
          </li>
        


          <li>
            <Link href="/Blog">Blog</Link>
          </li>
        


          <li className="li">
            <Link href="/Contact">Contact</Link>
          </li>
        



        </ul>
        </div>

        <div className="icons">
        <MdPersonOutline />
        <CiSearch />
        <GoHeart />
        <Link href={'/cart'}>
        <AiOutlineShoppingCart />
        </Link>

        </div>


      </div>
    </>
  );
}
