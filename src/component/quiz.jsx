
function QandA(props){
    return (
        <div className="w-1/2 flex flex-col justify-center mx-auto">
            <h1 className="font-bold text-xl text-center">{props.title}</h1>
            <h2 className="font-bold text-xl text-center">{props.projname}</h2>
  
            <div className="w-135 h-50 flex flex-col justify-center mx-auto mt-5 border border-transparent rounded-md shadow-2xl ">
                 <h2 className="ml-3.5 font-semibold">{props.quiz1}</h2>
                <div className="w-130 border border-transparent rounded-md mx-auto bg-red-400 mb-0.5"> <p className="ml-2">{props.ans1}</p> </div>
                <div className="w-130 border border-transparent rounded-md mx-auto  bg-red-400 mb-0.5"> <p className="ml-2">{props.ans2}</p> </div>
                <div className="w-130 border border-transparent rounded-md mx-auto  bg-green-400 mb-0.5"> <p className="ml-2">{props.ans3}</p> </div>
                <div className="w-130 border border-transparent rounded-md mx-auto  bg-red-400 mb-0.5"> <p className="ml-2">{props.ans4}</p> </div>
            </div>
  
            <div className="w-135 h-50 flex flex-col justify-center mx-auto mt-5 border border-transparent rounded-md shadow-2xl">
                 <h2 className="ml-3.5 font-semibold">{props.quiz2}</h2>
                <div className="w-130 border border-transparent rounded-md mx-auto bg-red-400 mb-0.5"> <p className="ml-2">{props.ans5}</p> </div>
                <div className="w-130 border border-transparent rounded-md mx-auto  bg-green-400 mb-0.5"> <p className="ml-2">{props.ans6}</p> </div>
                <div className="w-130 border border-transparent rounded-md mx-auto  bg-red-400 mb-0.5"> <p className="ml-2">{props.ans7}</p> </div>
                <div className="w-130 border border-transparent rounded-md mx-auto  bg-red-400 mb-0.5"> <p className="ml-2">{props.ans8}</p> </div>
            </div>
  
            <div className="w-135 h-50 flex flex-col justify-center mx-auto mt-5 border border-transparent rounded-md shadow-2xl">
                 <h2 className="ml-3.5 font-semibold">{props.quiz3}</h2>
                <div className="w-130 border border-transparent rounded-md mx-auto bg-red-400 mb-0.5"> <p className="ml-2">{props.ans9}</p> </div>
                <div className="w-130 border border-transparent rounded-md mx-auto  bg-red-400 mb-0.5"> <p className="ml-2">{props.ans10}</p> </div>
                <div className="w-130 border border-transparent rounded-md mx-auto  bg-green-400 mb-0.5"> <p className="ml-2">{props.ans11}</p> </div>
                <div className="w-130 border border-transparent rounded-md mx-auto  bg-red-400 mb-0.5"> <p className="ml-2">{props.ans12}</p> </div>
            </div>
            </div>
    )
  }
  
  export default QandA;
 