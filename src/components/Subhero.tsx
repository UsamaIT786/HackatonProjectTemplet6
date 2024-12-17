
import Image from "next/image"
export default function SubHero(){

    return (
        <>
        <div className="subText">
            <h3> Browse The Range</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="imgArea">
            <div className="imgOne">

            <Image src="/Images/sub1.png" width={282} height={282} alt="Picture of the author" />
                <h6>Dining</h6>
            </div>
                

            <div className="imgTow">
            <Image src="/Images/sub2.png" width={282}height={282} alt="Picture of the author" />
            <h6>Living</h6>
            </div>
            
            <div className="imgThree">

            <Image src="/Images/sub3.png" width={282}height={282} alt="Picture of the author" />
            <h6>Bedroom</h6>    
            </div>
           </div>

        </>
    )
}
