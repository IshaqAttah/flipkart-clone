
export default function RowOfThree({row1, row2, row3}){
    return(
        <div className='rowOf3 myContainer row '>
            <div className='row-item  col-lg-4 col-md-6 col-sm-12'>
                <img src={row1} alt="" className="img-fluid"/>
            </div>
            <div className='row-item col-lg-4 col-md-6 col-sm-12 gap-md-5'>
                <img src={row2} alt="" className="img-fluid"/>
            </div>
            <div className='row-item col-lg-4 col-md-6 col-sm-12'>
                <img src={row3} alt="" className="img-fluid"/>
            </div>

        
        </div>
    )
}