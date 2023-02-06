import { ImShare, ImHome, ImGithub } from "react-icons/im";
import Link from 'next/link'
import Newslatter from "./_child/newslatter";

export default function footer() {

  const bg = {
    backgroundImage : "url('/images/footer.png')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "bottom left"
  }

  return (
    <footer className="bg-gray-50" style={bg}>
      <Newslatter></Newslatter>
      <div className="container mx-auto flex justify-center py-12">
          <div className="py-5">
              <div className="flex gap-6 justify-center">
                    <Link href={"/"}><a><ImShare color="#888888" /></a></Link>
                    <Link href={"/"}><a><ImHome color="#888888" /></a></Link>                    
                    <Link href={"/"}><a><ImGithub color="#888888" /></a></Link>
              </div>

              <p className="py-5 text-gray-400 text-center">Made With ❤️ by Michael Murray</p>
              <p className="text-gray-400 text-center">© 2023</p>
          </div>
      </div>

    </footer>
  )
}
