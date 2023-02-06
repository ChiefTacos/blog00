import { ImFire, ImEarth, ImHeart} from "react-icons/im";
import Link from 'next/link'

export default function header() {
  return (
    <header className="bg-gray-50 headerFo border-b-4">
        <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
            <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
                
            </div>
            <div className="shrink w-80 sm:order-2">
                <Link href={"/"}>
                    <a className="font-bold uppercase text-3xl booty">SIRMUR</a>
                </Link>
            </div>
            <div className="w-96 order-3 flex justify-center">
                <div className="flex gap-6">
                    <Link href={"/"}><a className="fireButton"><ImFire color="orange" /></a></Link>
                    <Link href={"/"}><a className="globeButton"><ImEarth color="blue" /></a></Link>                    
                    <Link href={"/"}><a className="heartButton"><ImHeart color="red" /></a></Link>
                </div>
            </div>
        </div>
    </header>
  )
}
