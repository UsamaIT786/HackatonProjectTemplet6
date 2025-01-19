
import Image from "next/image";
export default function Products(){

    interface Card{
        name: string,
        age: number,
        description: string,
        image: string,
        price: string,
      }

    const data: Card[] = [
        {
          name: 'Syltherine',
          price: "Rp 2.500.000",
          age: 30,
          image: "/Images/usama1.png",
          description: 'Stylish cafe chair',
        },
        {
          name: 'Jane Smith',
          price: "Rp 2.500.000",
          age: 25,
          image: "/Images/usama2.png",
          description: 'A creative designer who loves creating stunning visuals.',
        },
        {
          name: 'Sam Wilson',
          price: "Rp 2.500.000",
          age: 28,
          image: '/Images/usama3.png',
          description: 'A software engineer specializing in backend systems.',
        },
        {
          name: 'Sam Wilson',
          price: "Rp 2.500.000",
          age: 28,
          image: '/Images/usama4.png',
          description: 'A software engineer specializing in backend systems.',
        },
        {
          name: 'Sam Wilson',
          price: "Rp 2.500.000",
          age: 28,
          image: '/Images/usama6.png',
          description: 'A software engineer specializing in backend systems.',
        },
        {
          name: 'Sam Wilson',
          price: "Rp 2.500.000",
          age: 28,
          image: '/Images/usama7.png',
          description: 'A software engineer specializing in backend systems.',
        },
        {
          name: 'Sam Wilson',
          price: "Rp 2.500.000",
          age: 28,
          image: '/Images/usama8.png',
          description: 'A software engineer specializing in backend systems.',
        },
        {
          name: 'Sam Wilson',
          price: "Rp 2.500.000",
          age: 28,
          image: '/Images/usama9.png',
          description: 'A software engineer specializing in backend systems.',
        },

        
      ];
    
    return (
        <>
        <div  className="product">
            <h2 className="text-center p-2 font-bold text-[3rem]">Our Product</h2>
            </div>
            <div className="cardsContainer">
            {data.map((card, index) => (
              
            <div className="card" key={index} style={{ width: "15rem" }}>
                <img
                  src={card.image}
                  style={{ width: "18rem", height: "18rem" }}
                  className="card-img-top"
                //   alt={card.title}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    {card.name}
                  </h5>
                  <p className="card-text">{card.description}</p>
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    {card.price}
                  </h5>
            </div>
            </div>
                    ))}


        </div>
        <div className="flex items-center justify-center mb-12">
       <button className="productBtn text-[#B88E2F] p-2 border-2 border-[#B88E2F]">Show More</button>
        </div>
        </>
    )
}
