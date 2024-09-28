function Card({img,title,desc,type,ratings,price}){
    return (
        <>
            <div className="border rounded-lg w-[260px] p-2 h-[370px]">
                <div className="relative">
                    <img src={img} alt="" className="w-full h-[200px] rounded-lg object-cover"/>
                    {
                        ratings > 4.5 ? <div className="absolute bottom-0 text-green-800 bg-green-100 px-3 py-[2px] mb-2 mx-2 rounded-full">Best Seller</div> : ""
                    }
                </div>
                <div className="flex items-center mt-2 justify-between">
                    <p className="font-semibold">{title}</p>
                    <span className={type === 'veg' ? "w-2 h-2 rounded-full bg-green-500" : "w-2 h-2 rounded-full bg-red-500"}></span>
                </div> 
                <p className="text-neutral-700 text-sm mt-2">{desc}</p>
                {
                    price > 145 ? <div className="mt-2 text-orange-500 bg-orange-100 text-center rounded-lg text-sm py-3">Free Delivery</div> : <div className="mt-2 text-blue-500 bg-blue-100 text-center rounded-lg text-sm py-3">Additional charges will be applied</div>
                }
            </div>
        </>
    )
}

export default Card;